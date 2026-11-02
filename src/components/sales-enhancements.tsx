import { useEffect, useState } from "react";
import { Check, Pause, Play, ShoppingBag, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MaterialCarousel({ images }: { images: string[] }) {
  const [paused, setPaused] = useState(false);
  return (
    <div className="mt-10">
      <div className={`material-carousel ${paused ? "is-paused" : ""}`} role="region" aria-label="Amostras do material">
        <div className="material-track">
          {[0, 1].map((copy) => <div key={copy} className="material-group" aria-hidden={copy === 1 ? true : undefined}>
            {images.map((src, index) => <img key={src} src={src} alt={copy === 0 ? `Ilustração de amostra ${index + 1}` : ""} draggable={false} className="material-preview" />)}
          </div>)}
        </div>
      </div>
      <div className="mt-5 flex items-center justify-center gap-4">
        <span className="text-sm text-muted-foreground">Amostras exclusivas • Prado Didático</span>
        <Button variant="outline" size="icon" onClick={() => setPaused((value) => !value)} aria-label={paused ? "Reproduzir amostras" : "Pausar amostras"} title={paused ? "Reproduzir amostras" : "Pausar amostras"}>{paused ? <Play /> : <Pause />}</Button>
      </div>
    </div>
  );
}

const examples = ["Maria Q.", "Ana P.", "Juliana M.", "Fernanda S."];

export function PurchaseDemonstration() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  useEffect(() => {
    if (dismissed || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let hide: ReturnType<typeof setTimeout> | undefined;
    const show = () => {
      setVisible(true);
      hide = setTimeout(() => { setVisible(false); setIndex((value) => (value + 1) % examples.length); }, 6000);
    };
    const first = setTimeout(show, 8000);
    const cycle = setInterval(show, 22000);
    return () => { clearTimeout(first); clearInterval(cycle); if (hide) clearTimeout(hide); };
  }, [dismissed]);
  if (!visible || dismissed) return null;
  return (
    <aside className="purchase-notice" aria-label="Demonstração de notificação de compra">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary/15 text-secondary"><ShoppingBag className="h-5 w-5" /></div>
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-extrabold uppercase text-muted-foreground">Demonstração · compra simulada</p>
        <p className="mt-1 text-sm"><strong>{examples[index]}</strong> acabou de comprar</p>
        <p className="text-xs font-bold text-primary">Consciência Negra — 39 Ilustrações</p>
        <p className="mt-1 flex items-center gap-1 text-[10px] text-secondary"><Check className="h-3 w-3" /> Exemplo de confirmação</p>
      </div>
      <Button size="icon" variant="ghost" className="h-7 w-7 shrink-0" title="Fechar notificação" aria-label="Fechar notificação" onClick={() => setDismissed(true)}><X /></Button>
    </aside>
  );
}