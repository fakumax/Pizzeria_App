import Link from "next/link";
import AddToCartButton from "@/components/ui/AddToCartButton";

const bestSellers = [
  {
    name: "Pizza cajún",
    price: "$9.99",
    img: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=500&q=80&auto=format&fit=crop",
  },
  {
    name: "Pizza de queso",
    price: "$7.99",
    img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=80&auto=format&fit=crop",
  },
  {
    name: "Pizza vegetariana",
    price: "$8.49",
    img: "https://images.unsplash.com/photo-1571066811602-716837d681de?w=500&q=80&auto=format&fit=crop",
  },
  {
    name: "Pizza de carne",
    price: "$10.49",
    img: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=500&q=80&auto=format&fit=crop",
  },
];

export default function BestSellers() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 pt-5 pb-[70px] md:px-[60px]">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="font-display text-2xl uppercase md:text-3xl">
          Nuestros <span className="text-olive">más vendidos</span>
        </h2>
        <Link
          href="/menu"
          className="cursor-pointer rounded-3xl border border-[#55534a] px-5 py-3 text-xs font-semibold tracking-[0.4px] text-[#efece5] transition-colors hover:bg-[#efece5] hover:text-ink"
        >
          VER TODOS LOS PRODUCTOS
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-[22px] lg:grid-cols-4">
        {bestSellers.map((p) => (
          <div key={p.name} className="overflow-hidden rounded-2xl bg-card">
            <div className="relative h-[180px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.img}
                alt={p.name}
                className="h-full w-full object-cover"
              />
              <span className="absolute top-2.5 right-2.5 rounded-md bg-red px-2.5 py-[5px] text-[10px] font-bold text-white">
                20% OFF
              </span>
            </div>
            <div className="p-[18px]">
              <div className="font-display text-base font-bold uppercase">
                {p.name}
              </div>
              <div className="mt-1 mb-2 text-sm font-semibold text-olive">
                {p.price}
              </div>
              <div className="mb-3 text-[13px] text-gold">★★★★★</div>
              <AddToCartButton className="block w-full cursor-pointer rounded-[20px] bg-red py-2.5 text-center text-xs font-bold tracking-[0.3px] text-white transition-colors hover:bg-red-dark">
                PEDIR AHORA
              </AddToCartButton>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
