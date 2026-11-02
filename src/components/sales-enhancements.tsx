import { useEffect, useState } from "react";
import { Pause, Play, ShoppingBag, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { nextPurchaseExample, purchaseExamples } from "@/lib/purchase-examples";

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

export function PurchaseDemonstration() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  useEffect(() => {
    if (dismissed || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let hide: ReturnType<typeof setTimeout> | undefined;
    const show = () => {
      setVisible(true);
      hide = setTimeout(() => { setVisible(false); setIndex(nextPurchaseExample); }, 6000);
    };
    const first = setTimeout(show, 8000);
    const cycle = setInterval(show, 22000);
    return () => { clearTimeout(first); clearInterval(cycle); if (hide) clearTimeout(hide); };
  }, [dismissed]);
  if (!visible || dismissed) return null;
  return (
    <aside className="purchase-notice" aria-label="Notificação de compra simulada" aria-live="polite">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-cta/10 text-cta"><ShoppingBag className="h-6 w-6" strokeWidth={2} /></div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-extrabold leading-snug">{purchaseExamples[index]}</p>
        <p className="mt-0.5 text-xs font-bold text-muted-foreground">acabou de comprar</p>
        <p className="mt-1 text-xs font-extrabold leading-snug text-primary">Consciência Negra — 39 Ilustrações</p>
        <p className="mt-2 text-[10px] font-bold text-muted-foreground">Compra simulada</p>
      </div>
      <Button size="icon" variant="ghost" className="h-7 w-7 shrink-0" title="Fechar notificação" aria-label="Fechar notificação" onClick={() => setDismissed(true)}><X /></Button>
    </aside>
  );
}