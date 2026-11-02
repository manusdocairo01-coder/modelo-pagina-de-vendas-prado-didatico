import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ShieldCheck, ShoppingCart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MaterialCarousel, PurchaseDemonstration } from "@/components/sales-enhancements";
import logo from "@/assets/prado-logo.png.asset.json";
import member from "@/assets/acesso-materiais.png.asset.json";
import download from "@/assets/materiais-digitais.png.asset.json";
import guarantee from "@/assets/garantia-sete-dias.png.asset.json";
import f0 from "@/assets/protected/protected-foto.jpg.asset.json";
import f1 from "@/assets/protected/protected-foto_1.jpg.asset.json";
import f2 from "@/assets/protected/protected-foto_2.jpg.asset.json";
import f3 from "@/assets/protected/protected-foto_3.jpg.asset.json";
import f4 from "@/assets/protected/protected-foto_4.jpg.asset.json";
import f5 from "@/assets/protected/protected-foto_5.jpg.asset.json";
import p3 from "@/assets/protected/protected-pagina-p-03.jpg.asset.json";
import p4 from "@/assets/protected/protected-pagina-p-04.jpg.asset.json";
import p5 from "@/assets/protected/protected-pagina-p-05.jpg.asset.json";
import p6 from "@/assets/protected/protected-pagina-p-06.jpg.asset.json";
import p7 from "@/assets/protected/protected-pagina-p-07.jpg.asset.json";
import p8 from "@/assets/protected/protected-pagina-p-08.jpg.asset.json";
import p9 from "@/assets/protected/protected-pagina-p-09.jpg.asset.json";
import p10 from "@/assets/protected/protected-pagina-p-10.jpg.asset.json";
import p11 from "@/assets/protected/protected-pagina-p-11.jpg.asset.json";
import p12 from "@/assets/protected/protected-pagina-p-12.jpg.asset.json";
import p13 from "@/assets/protected/protected-pagina-p-13.jpg.asset.json";

const TITLE = "Consciência Negra – 39 Ilustrações para Colorir | Dyana Prado";
const DESC =
  "39 ilustrações A4 para colorir com frases sobre identidade, respeito e cultura afro-brasileira. Pronto para imprimir, do 1º ao 5º ano.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// Links de checkout: troque pelos seus links reais
const CHECKOUT_BASICO = "#oferta";
const CHECKOUT_PREMIUM = "#oferta";
const WHATSAPP = "#";

const fotos = [f0, f1, f2, f3, f4, f5].map((f) => f.url);
const paginas = [p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13].map((p) => p.url);

function Cta({ href = "#oferta", children }: { href?: string; children: React.ReactNode }) {
  return (
    <Button asChild className="h-auto max-w-full whitespace-normal rounded-lg bg-cta px-8 py-4 font-display text-lg font-bold uppercase text-cta-foreground shadow-cta hover:bg-cta/90"><a
      href={href}
      className="pulse-cta"
    >
      {children}<ArrowRight className="ml-2" />
    </a></Button>
  );
}

function Check({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cta text-sm font-bold text-cta-foreground">✓</span>
      <span>{children}</span>
    </li>
  );
}

function Countdown() {
  const [s, setS] = useState(15 * 60);
  useEffect(() => {
    const t = setInterval(() => setS((v) => (v > 0 ? v - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, []);
  const box = "rounded-xl bg-deep px-5 py-3 text-center text-deep-foreground";
  return (
    <div className="flex justify-center gap-3">
      <div className={box}><div className="font-display text-3xl font-bold">{String(Math.floor(s / 60)).padStart(2, "0")}</div><div className="text-xs uppercase">Minutos</div></div>
      <div className={box}><div className="font-display text-3xl font-bold">{String(s % 60).padStart(2, "0")}</div><div className="text-xs uppercase">Segundos</div></div>
    </div>
  );
}

const faq = [
  ["Quais as formas de pagamento?", "PIX, cartão de crédito ou boleto. No PIX e no cartão a liberação é imediata; no boleto pode levar até 72h úteis."],
  ["Tem garantia?", "Sim, 7 dias de garantia incondicional. Se não gostar, devolvemos seu dinheiro sem burocracia."],
  ["Como recebo o material?", "Após a confirmação do pagamento, você recebe o acesso por e-mail com a coleção digital em alta resolução, prontos para imprimir."],
  ["Posso imprimir quantas vezes quiser?", "Sim! Imprima para todas as suas turmas, para uso pessoal ou pedagógico em sala de aula."],
  ["Serve para qual idade?", "Indicado para o 1º ao 5º ano do Ensino Fundamental, adaptando a leitura das frases e a conversa ao nível da turma."],
];

function Index() {
  return (
    <main className="protected-material overflow-x-hidden bg-background text-foreground" onContextMenu={(event) => event.preventDefault()} onDragStart={(event) => event.preventDefault()}>
      <div className="bg-deep py-2 text-center text-sm font-semibold text-deep-foreground">🔒 Compra 100% segura e protegida</div>

      <header className="flex items-center justify-center border-b border-border bg-card px-5 py-4"><img src={logo.url} alt="Prado Didático" className="h-14 w-52 object-contain" draggable={false} /></header>

      {/* Hero */}
      <section className="bg-hero px-5 pb-16 pt-10 text-deep-foreground">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-accent px-4 py-1 text-sm font-bold text-accent-foreground">20 de Novembro • Dia da Consciência Negra</span>
          <h1 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">
            Consciência Negra<br /><span className="text-accent">39 Ilustrações para Colorir</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg opacity-90">
            Leve identidade, respeito e cultura afro-brasileira para sua sala com ilustrações em tamanho A4, cada uma com uma <strong>frase reflexiva</strong>, prontos para imprimir. Do 1º ao 5º ano, você monta um mural lindo e uma aula cheia de significado, <strong>sem passar horas preparando</strong>.
          </p>
          <img src={fotos[0]} alt="Ilustrações coloridas pelos alunos" className="mx-auto mt-8 w-full max-w-md rotate-1 rounded-lg border-8 border-card shadow-2xl" />
          <p className="mx-auto mt-8 max-w-xl text-lg font-semibold">Um material para trabalhar a Consciência Negra com afeto, arte e conversa, e não só no dia 20.</p>
          <div className="mt-6"><Cta>Sim, quero garantir o material</Cta></div>
          <p className="mt-6 text-lg">Você recebe tudo na hora, direto no seu e-mail</p>
          <p className="mt-1 text-xl">De <s className="opacity-70">R$ 37,90</s> por apenas <span className="font-display text-4xl font-bold text-accent">R$ 10,00</span></p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm font-bold">
            <span className="rounded-full bg-card/15 px-4 py-2">✅ Satisfação garantida</span>
            <span className="rounded-full bg-card/15 px-4 py-2">⚡ Acesso imediato</span>
            <span className="rounded-full bg-card/15 px-4 py-2">🖨️ Pronto para imprimir</span>
          </div>
        </div>
      </section>
      <div className="tribal h-3" />

      {/* Fotos reais */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Veja como fica nas mãos dos alunos</h2>
          <p className="mt-3 text-muted-foreground">Produções reais de turmas que já usaram o material.</p>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
            {fotos.map((u, i) => (
              <img key={i} draggable={false} src={u} alt={`Ilustração colorida ${i + 1}`} loading="lazy" className="aspect-[3/4] w-full rounded-lg object-cover shadow-lg" />
            ))}
          </div>
        </div>
      </section>

      {/* Amostra */}
      <section className="bg-muted px-5 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Veja uma pequena amostra do material que você vai receber:</h2>
          <p className="mt-3 text-lg font-semibold text-primary">Ilustrações que encantam as crianças e abrem espaço para conversas importantes</p>
          <MaterialCarousel images={paginas} />
        </div>
          <p className="mt-2 text-sm text-muted-foreground">← arraste para ver mais →</p>
        </div>
      </section>

      {/* Por que */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold md:text-4xl">Por que você precisa ter este material?</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ["🎨", "39 ilustrações A4", "Desenhos exclusivos com frases sobre identidade, ancestralidade, cabelos, família, África, leitura e pertencimento."],
              ["📚", "Do 1º ao 5º ano", "Use com diferentes turmas, ajustando a leitura das frases e a conversa à idade das crianças."],
              ["💬", "Aprendizado com significado", "Desenvolve leitura, oralidade, coordenação motora, criatividade, autoestima e respeito à diversidade."],
            ].map(([i, t, d]) => (
              <div key={t} className="rounded-lg border-2 border-border bg-card p-7 text-center shadow-sm">
                <div className="text-5xl">{i}</div>
                <h3 className="mt-4 text-xl font-bold">{t}</h3>
                <p className="mt-2 text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal */}
      <section className="bg-hero px-5 py-16 text-deep-foreground">
        <div className="mx-auto max-w-3xl">
          <p className="text-center font-display text-lg font-bold uppercase text-accent">Aproveite o preço promocional</p>
          <h2 className="mt-2 text-center text-3xl font-bold uppercase">Ideal para você que deseja:</h2>
          <ul className="mt-8 space-y-4 text-lg [&>li]:items-center [&>li]:rounded-lg [&>li]:bg-card [&>li]:p-5 [&>li]:text-card-foreground">
            <Check>Ter uma atividade pronta e bonita para o Dia da Consciência Negra, sem gastar horas criando.</Check>
            <Check>Montar um mural ou exposição que valorize o trabalho da turma e encante a escola.</Check>
            <Check>Trabalhar identidade, respeito e cultura afro-brasileira de um jeito leve, visual e acolhedor.</Check>
            <Check>Integrar História, Língua Portuguesa, Artes e Geografia numa só proposta.</Check>
          </ul>
        </div>
      </section>

      {/* Como usar */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-display font-bold uppercase text-primary">⚡ Acesso imediato</p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">Tudo foi pensado para ser simples de aplicar</h2>
          <div className="mt-10 grid gap-4 text-left sm:grid-cols-2 md:grid-cols-5">
            {[
              ["1", "Roda de conversa", "Apresente o tema da Consciência Negra."],
              ["2", "Leitura da frase", "Cada aluno lê a frase da sua página."],
              ["3", "Pintura", "As crianças colorem e soltam a criatividade."],
              ["4", "Socialização", "Cada um compartilha o que aprendeu."],
              ["5", "Exposição", "Monte o mural e valorize a turma."],
            ].map(([n, t, d]) => (
              <div key={n} className="rounded-lg bg-muted p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-display text-lg font-bold text-primary-foreground">{n}</div>
                <h3 className="mt-3 font-bold">{t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 font-display text-xl font-bold">+ guia do professor com sugestões de uso</p>
          <div className="mt-8"><Cta>Sim, quero garantir o material</Cta></div>
          <p className="mt-4">Você recebe tudo na hora, direto no seu e-mail</p>
        </div>
      </section>

      {/* Oferta */}
      <section id="oferta" className="bg-muted px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-center font-display text-lg font-bold uppercase text-primary">🕒 Oferta válida por tempo limitado</p>
          <h2 className="mt-2 text-center text-3xl font-bold uppercase">Escolha a melhor opção para você:</h2>
          <div className="mt-10 grid items-start gap-8 md:grid-cols-2">
            <div className="rounded-lg border-2 border-border bg-card p-8 text-center">
              <h3 className="text-2xl font-bold">Plano Básico</h3>
              <ul className="mt-6 space-y-3 text-left"><Check>39 ilustrações A4 para colorir – Consciência Negra • Coleção digital</Check></ul>
              <p className="mt-6 text-sm text-muted-foreground">Clique no botão abaixo e garanta já o seu!</p>
              <p className="mt-2 font-display text-5xl font-bold">R$ 10,00</p>
              <p className="text-sm text-muted-foreground">Pagamento único</p>
              <a href={CHECKOUT_BASICO} className="mt-6 inline-block w-full rounded-full border-2 border-cta px-6 py-3 font-display font-bold uppercase text-cta transition hover:bg-cta hover:text-cta-foreground">Quero essa opção!</a>
            </div>
            <div className="relative rounded-lg border-4 border-primary bg-card p-8 text-center shadow-2xl">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-5 py-1 font-display font-bold text-primary-foreground">⚡ MAIS VENDIDO</span>
              <h3 className="text-2xl font-bold">Plano Premium</h3>
              <p className="mt-1 text-sm font-bold text-primary">Tudo do Básico + bônus</p>
              <ul className="mt-6 space-y-3 text-left">
                <Check>39 ilustrações A4 para colorir – Consciência Negra</Check>
                <Check>Bônus: Painel "Consciência Negra" para mural</Check>
                <Check>Bônus: Plaquinhas de frases para exposição</Check>
                <Check>Bônus: Certificado de participação para os alunos</Check>
                <Check>Acesso vitalício ao conteúdo</Check>
                <Check>Acesso à coleção digital por e-mail</Check>
              </ul>
              <p className="mt-6 text-muted-foreground">Valor total <s>R$ 67,00</s></p>
              <p className="text-sm font-bold">Hoje, pagamento único</p>
              <p className="font-display text-6xl font-bold text-primary">R$ 19,90</p>
              <p className="text-sm text-muted-foreground">ou parcelado no cartão</p>
              <div className="mt-6"><Cta href={CHECKOUT_PREMIUM}>Sim, quero o Premium</Cta></div>
            </div>
          </div>
          <p className="mt-10 text-center font-semibold">Professoras de todo o Brasil já usam os materiais no dia a dia.</p>
          <p className="mt-6 text-center">Aproveite a oferta por tempo limitado</p>
          <div className="mt-3"><Countdown /></div>
        </div>
      </section>

      {/* WhatsApp */}
      <section className="px-5 py-12 text-center">
        <h2 className="text-3xl font-bold">DÚVIDAS?</h2>
        <p className="mt-2 font-semibold">Fale com a nossa equipe no WhatsApp:</p>
        <a href={WHATSAPP} className="mt-5 inline-block rounded-full bg-secondary px-8 py-3 font-display font-bold text-secondary-foreground">ENVIE UMA MENSAGEM</a>
      </section>

      {/* Autora */}
      <section className="bg-hero px-5 py-16 text-deep-foreground">
        <div className="mx-auto grid max-w-4xl items-center gap-10 md:grid-cols-[1fr_1.5fr]">
          <div className="flex flex-col items-center gap-5 border-b border-accent/30 pb-8 md:border-b-0 md:border-r md:pb-0 md:pr-10">
            <div className="flex h-28 w-28 items-center justify-center rounded-full border-2 border-accent font-display text-4xl text-accent">DP</div>
            <p className="font-display text-2xl font-bold">Professora Dyana Prado</p>
            <p className="text-sm text-accent">@profdyanaprado</p>
          </div>
          <div>
            <p className="text-sm font-extrabold uppercase text-accent">Quem está por trás do material</p>
            <h2 className="mt-3 text-3xl font-bold">Um olhar de professora.<br />Um cuidado em cada detalhe.</h2>
            <p className="mt-5 text-lg">Criado por <strong>Dyana Prado</strong>, este material reúne arte, reflexão e intencionalidade pedagógica para valorizar a identidade e o respeito à diversidade.</p>
            <p className="mt-4 opacity-90">39 propostas visuais para transformar a conversa sobre Consciência Negra em uma experiência criativa e acolhedora na sua turma.</p>
            <p className="mt-5 flex items-center gap-2 font-bold text-accent"><ShieldCheck className="h-5 w-5" /> Prado Didático • Recursos pedagógicos</p>
          </div>
        </div>
      </section>

      {/* Garantia */}
      <section className="bg-muted px-5 py-16">
        <div className="mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-[1fr_2fr]">
          <img src={guarantee.url} alt="Compra garantida por 7 dias" className="mx-auto w-60" draggable={false} />
          <div>
            <h2 className="text-3xl font-bold uppercase">Satisfação garantida ou seu dinheiro de volta!</h2>
            <p className="mt-6">Se o material não fizer sentido para sua turma ou não atender à sua necessidade, você pode solicitar o reembolso dentro do prazo de garantia.</p>
            <p className="mt-5 text-xl font-extrabold text-primary">7 dias de garantia incondicional</p>
            <p className="mt-2">Sem burocracia. Sem explicação obrigatória.</p>
            <p className="mt-5">Você leva uma <strong>coleção de atividades prontas para transformar suas aulas</strong>. Se não fizer sentido para você, o risco fica do nosso lado.</p>
          </div>
        </div>
      </section>

      {/* Acesso */}
      <section className="bg-muted px-5 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold uppercase">Como é o acesso</h2><p className="mt-2 font-bold text-primary">Passo a passo</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ["🛒", "Conclua sua compra", "Após o pagamento, o acesso é liberado automaticamente."],
              ["📧", "Acesse sua coleção", "Receba as instruções por e-mail e acesse sua coleção de atividades."],
              ["🖨️", "Imprima e encante", "Coleção digital em alta resolução, com atividades prontas para imprimir e aplicar."],
            ].map(([i, t, d]) => (
              <div key={t} className="p-5">
                <div className="mx-auto flex h-28 w-28 items-center justify-center">{i === "🛒" ? <ShoppingCart className="h-24 w-24 text-secondary" /> : <img src={i === "📧" ? member.url : download.url} alt="" className="h-28 w-28 object-contain" draggable={false} />}</div>
                <h3 className="mt-6 text-lg font-bold">{t}</h3>
                <p className="mt-2 text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-10"><Cta>Quero meu acesso agora</Cta></div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold">Perguntas frequentes</h2>
          <div className="mt-8 space-y-3">
            {faq.map(([q, a]) => (
              <details key={q} className="rounded-lg border-2 border-border bg-card p-5">
                <summary className="cursor-pointer font-display text-lg font-bold">{q}</summary>
                <p className="mt-3 text-muted-foreground">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <PurchaseDemonstration />
      <div className="tribal h-3" />
      <footer className="bg-deep px-5 py-10 text-center text-sm text-deep-foreground">
        <p className="font-display text-xl font-bold">Prado Didático • Recursos Pedagógicos</p>
        <p className="mt-3">Pagamento via PIX, cartão de crédito ou boleto</p>
        <p className="mx-auto mt-4 max-w-xl opacity-70">Material protegido pela Lei nº 9.610/98. Uso pessoal ou pedagógico. Proibida a revenda ou compartilhamento do arquivo.</p>
        <p className="mt-4 opacity-70">Todos os direitos reservados © 2026</p>
      </footer>
    </main>
  );
}
