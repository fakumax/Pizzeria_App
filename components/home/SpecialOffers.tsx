import AddToCartButton from "@/components/ui/AddToCartButton";

function SodaCup() {
  return (
    <div className="h-[60px] w-[34px] rounded-t-lg rounded-b bg-[linear-gradient(#a3271b,#c23b2c)]" />
  );
}

const addBtn =
  "block w-full cursor-pointer rounded-[20px] bg-red py-2.5 text-center text-xs font-bold tracking-[0.3px] text-white transition-colors hover:bg-red-dark";

export default function SpecialOffers() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 pt-5 pb-20 md:px-[60px]">
      <h2 className="mb-9 font-display text-2xl uppercase md:text-3xl">
        Ofertas <span className="text-olive">especiales</span>
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {/* Oferta 1 */}
        <div className="rounded-2xl bg-cream p-[26px]">
          <div className="mb-4 font-display text-xl font-bold uppercase text-ink">
            Oferta 1
          </div>
          <div className="mb-4 flex items-center gap-2.5">
            <SodaCup />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=300&q=80&auto=format&fit=crop"
              alt="Pizza grande"
              className="h-[100px] w-[120px] rounded-xl object-cover"
            />
          </div>
          <div className="mb-1.5 text-[13px] font-semibold text-ink">
            1 PIZZA GRANDE CON 1 GASEOSA
          </div>
          <div className="mb-2 text-[15px] font-bold text-olive">$13.99</div>
          <div className="mb-4 text-[13px] text-gold">★★★★★</div>
          <AddToCartButton className={addBtn}>AGREGAR</AddToCartButton>
        </div>

        {/* Oferta 2 */}
        <div className="rounded-2xl bg-cream p-[26px]">
          <div className="mb-4 font-display text-xl font-bold uppercase text-ink">
            Oferta 2
          </div>
          <div className="mb-4 flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300&q=80&auto=format&fit=crop"
              alt="Pizzas grandes"
              className="h-[100px] w-20 rounded-xl object-cover"
            />
            <SodaCup />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=300&q=80&auto=format&fit=crop"
              alt="Pizzas grandes"
              className="h-[100px] w-20 rounded-xl object-cover"
            />
          </div>
          <div className="mb-1.5 text-[13px] font-semibold text-ink">
            3 PIZZAS GRANDES CON 1 GASEOSA
          </div>
          <div className="mb-2 text-[15px] font-bold text-olive">$34.99</div>
          <div className="mb-4 text-[13px] text-gold">★★★★★</div>
          <AddToCartButton className={addBtn}>AGREGAR</AddToCartButton>
        </div>

        {/* Oferta 3 */}
        <div className="rounded-2xl bg-cream p-[26px]">
          <div className="mb-4 font-display text-xl font-bold uppercase text-ink">
            Oferta 3
          </div>
          <div className="mb-4 flex items-center gap-2.5">
            <SodaCup />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1571066811602-716837d681de?w=300&q=80&auto=format&fit=crop"
              alt="Pizza pequeña"
              className="h-[100px] w-[120px] rounded-xl object-cover"
            />
          </div>
          <div className="mb-1.5 text-[13px] font-semibold text-ink">
            1 PIZZA PEQUEÑA CON 1 GASEOSA
          </div>
          <div className="mb-2 text-[15px] font-bold text-olive">$16.99</div>
          <div className="mb-4 text-[13px] text-gold">★★★★★</div>
          <AddToCartButton className={addBtn}>AGREGAR</AddToCartButton>
        </div>
      </div>
    </section>
  );
}
