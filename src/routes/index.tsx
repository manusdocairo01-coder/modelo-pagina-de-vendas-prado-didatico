import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import f0 from "@/assets/foto.jpeg.asset.json";
import f1 from "@/assets/foto_1.jpeg.asset.json";
import f2 from "@/assets/foto_2.jpeg.asset.json";
import f3 from "@/assets/foto_3.jpeg.asset.json";
import f4 from "@/assets/foto_4.jpeg.asset.json";
import f5 from "@/assets/foto_5.jpeg.asset.json";
import p3 from "@/assets/pagina-p-03.jpg.asset.json";
import p4 from "@/assets/pagina-p-04.jpg.asset.json";
import p5 from "@/assets/pagina-p-05.jpg.asset.json";
import p6 from "@/assets/pagina-p-06.jpg.asset.json";
import p7 from "@/assets/pagina-p-07.jpg.asset.json";
import p8 from "@/assets/pagina-p-08.jpg.asset.json";
import p9 from "@/assets/pagina-p-09.jpg.asset.json";
import p10 from "@/assets/pagina-p-10.jpg.asset.json";
import p11 from "@/assets/pagina-p-11.jpg.asset.json";
import p12 from "@/assets/pagina-p-12.jpg.asset.json";
import p13 from "@/assets/pagina-p-13.jpg.asset.json";

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
    <a
      href={href}
      className="pulse-cta inline-block rounded-full bg-cta px-8 py-4 text-center font-display text-lg font-bold uppercase text-cta-foreground shadow-cta transition hover:brightness-110"
    >
      {children}
    </a>
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
  ["Como recebo o material?", "Após a confirmação do pagamento, você recebe o acesso por e-mail com os arquivos em PDF de alta resolução, prontos para imprimir."],
  ["Posso imprimir quantas vezes quiser?", "Sim! Imprima para todas as suas turmas, para uso pessoal ou pedagógico em sala de aula."],
  ["Serve para qual idade?", "Indicado para o 1º ao 5º ano do Ensino Fundamental, adaptando a leitura das frases e a conversa ao nível da turma."],
];

function Index() {
  return (
    <main className="overflow-x-hidden bg-background text-foreground">
      <div className="bg-deep py-2 text-center text-sm font-semibold text-deep-foreground">🔒 Compra 100% segura e protegida</div>

      {/* Hero */}
      <section className="bg-hero px-5 pb-16 pt-10 text-deep-foreground">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-accent px-4 py-1 text-sm font-bold text-accent-foreground">20 de Novembro • Dia da Consciência Negra</span>
          <h1 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">
            39 ilustrações para colorir que levam <span className="text-accent">identidade, respeito e cultura afro-brasileira</span> para a sua sala de aula
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg opacity-90">
            Desenhos em tamanho A4, cada um com uma <strong>frase reflexiva</strong>, prontos para imprimir. Do 1º ao 5º ano, você monta um mural lindo e uma aula cheia de significado, <strong>sem passar horas preparando</strong>.
          </p>
          <img src={fotos[0]} alt="Ilustrações coloridas pelos alunos" className="mx-auto mt-8 w-full max-w-md rotate-1 rounded-3xl border-8 border-card shadow-2xl" />
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
              <img key={i} src={u} alt={`Ilustração colorida ${i + 1}`} loading="lazy" className="aspect-[3/4] w-full rounded-2xl object-cover shadow-lg" />
            ))}
          </div>
        </div>
      </section>

      {/* Amostra */}
      <section className="bg-muted px-5 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Veja uma pequena amostra do material que você vai receber:</h2>
          <p className="mt-3 text-lg font-semibold text-primary">Ilustrações que encantam as crianças e abrem espaço para conversas importantes</p>
          <div className="mt-10 flex snap-x gap-4 overflow-x-auto pb-4">
            {paginas.map((u, i) => (
              <img key={i} src={u} alt={`Página de amostra ${i + 1}`} loading="lazy" className="w-56 shrink-0 snap-center rounded-xl border border-border bg-card shadow-md md:w-64" />
            ))}
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
              <div key={t} className="rounded-3xl border-2 border-border bg-card p-7 text-center shadow-sm">
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
          <ul className="mt-8 space-y-5 text-lg">
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
              <div key={n} className="rounded-2xl bg-muted p-5">
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
            <div className="rounded-3xl border-2 border-border bg-card p-8 text-center">
              <h3 className="text-2xl font-bold">Plano Básico</h3>
              <ul className="mt-6 space-y-3 text-left"><Check>39 ilustrações A4 para colorir – Consciência Negra (PDF)</Check></ul>
              <p className="mt-6 text-sm text-muted-foreground">Clique no botão abaixo e garanta já o seu!</p>
              <p className="mt-2 font-display text-5xl font-bold">R$ 10,00</p>
              <p className="text-sm text-muted-foreground">Pagamento único</p>
              <a href={CHECKOUT_BASICO} className="mt-6 inline-block w-full rounded-full border-2 border-cta px-6 py-3 font-display font-bold uppercase text-cta transition hover:bg-cta hover:text-cta-foreground">Quero essa opção!</a>
            </div>
            <div className="relative rounded-3xl border-4 border-primary bg-card p-8 text-center shadow-2xl">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-5 py-1 font-display font-bold text-primary-foreground">⚡ MAIS VENDIDO</span>
              <h3 className="text-2xl font-bold">Plano Premium</h3>
              <p className="mt-1 text-sm font-bold text-primary">Tudo do Básico + bônus</p>
              <ul className="mt-6 space-y-3 text-left">
                <Check>39 ilustrações A4 para colorir – Consciência Negra</Check>
                <Check>Bônus: Painel "Consciência Negra" para mural</Check>
                <Check>Bônus: Plaquinhas de frases para exposição</Check>
                <Check>Bônus: Certificado de participação para os alunos</Check>
                <Check>Acesso vitalício ao conteúdo</Check>
                <Check>Envio imediato por e-mail (PDF)</Check>
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
        <div className="mx-auto grid max-w-4xl items-center gap-8 md:grid-cols-2">
          <img src={fotos[1]} alt="Material nas mãos da professora" className="w-full rounded-3xl shadow-2xl" />
          <div>
            <h2 className="text-3xl font-bold">Qualidade garantida <span className="text-accent">@profdyanaprado</span></h2>
            <p className="mt-4 text-lg opacity-90">Todo o material foi criado por <strong>Dyana Prado – Recursos Pedagógicos</strong>, com recursos feitos com intencionalidade: bonitos, práticos e testados em sala de aula de verdade.</p>
          </div>
        </div>
      </section>

      {/* Garantia */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-3xl rounded-3xl border-2 border-border bg-card p-8 md:p-12">
          <div className="text-center text-6xl">🛡️</div>
          <h2 className="mt-4 text-center text-3xl font-bold">Satisfação garantida ou seu dinheiro de volta!</h2>
          <p className="mt-6">Se a qualquer momento você achar que:</p>
          <ul className="mt-3 list-disc space-y-1 pl-6"><li>o material não faz sentido para a sua turma</li><li>as ilustrações não atendem sua necessidade</li></ul>
          <p className="mt-3">👉 você pode pedir o reembolso.</p>
          <p className="mt-6 font-display text-xl font-bold text-primary">7 dias de garantia incondicional</p>
          <p className="mt-2">Sem burocracia. Sem explicação obrigatória.</p>
          <p className="mt-4">Você não está comprando uma promessa: está levando <strong>atividades prontas, testadas e aprovadas em sala de aula</strong>. Se não fizer sentido, o risco é todo nosso.</p>
        </div>
      </section>

      {/* Acesso */}
      <section className="bg-muted px-5 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold">Como é o acesso (passo a passo)</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ["🛒", "Conclua sua compra", "Após o pagamento, o acesso é liberado automaticamente."],
              ["📧", "Receba no e-mail", "Você recebe o link para acessar e baixar o material."],
              ["🖨️", "Baixe e imprima", "PDF em alta resolução, 100% digital, pronto para imprimir."],
            ].map(([i, t, d]) => (
              <div key={t} className="rounded-3xl bg-card p-7 shadow-sm">
                <div className="text-5xl">{i}</div>
                <h3 className="mt-3 text-lg font-bold">{t}</h3>
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
              <details key={q} className="rounded-2xl border-2 border-border bg-card p-5">
                <summary className="cursor-pointer font-display text-lg font-bold">{q}</summary>
                <p className="mt-3 text-muted-foreground">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <div className="tribal h-3" />
      <footer className="bg-deep px-5 py-10 text-center text-sm text-deep-foreground">
        <p className="font-display text-xl font-bold">Dyana Prado • Recursos Pedagógicos</p>
        <p className="mt-3">Pagamento via PIX, cartão de crédito ou boleto</p>
        <p className="mx-auto mt-4 max-w-xl opacity-70">Material protegido pela Lei nº 9.610/98. Uso pessoal ou pedagógico. Proibida a revenda ou compartilhamento do arquivo.</p>
        <p className="mt-4 opacity-70">Todos os direitos reservados © 2026</p>
      </footer>
    </main>
  );
}
