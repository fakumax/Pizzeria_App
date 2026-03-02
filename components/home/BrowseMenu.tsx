import AddToCartButton from "@/components/ui/AddToCartButton";

const items = [
  {
    name: "PAPAS CARGADAS",
    price: "$4.99",
    img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=200&q=80&auto=format&fit=crop",
  },
  {
    name: "LASAÑA",
    price: "$11.99",
    img: "https://images.unsplash.com/photo-1619895092538-128341789043?w=200&q=80&auto=format&fit=crop",
  },
  {
    name: "PALITOS DE PAN",
    price: "$4.49",
    img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200&q=80&auto=format&fit=crop",
  },
  {
    name: "ALITAS",
    price: "$7.99",
    img: "https://images.unsplash.com/photo-1608039755401-742074f0548d?w=200&q=80&auto=format&fit=crop",
  },
  {
    name: "ENSALADAS",
    price: "$6.49",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&q=80&auto=format&fit=crop",
  },
  {
    name: "BEBIDAS FRÍAS",
    price: "$1.99",
    img: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=200&q=80&auto=format&fit=crop",
  },
];

export default function BrowseMenu() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 pt-5 pb-20 md:px-[60px]">
      <h2 className="mb-8 font-display text-2xl uppercase md:text-3xl">
        Explora nuestro <span className="text-olive">menú</span>
      </h2>
      <div className="grid gap-[18px] md:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.name}
            className="flex items-center gap-4 rounded-xl bg-cream px-4 py-3"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.img}
              alt={item.name}
              className="h-16 w-16 rounded-lg object-cover"
            />
            <div className="flex-1">
              <div className="text-sm font-bold text-ink">{item.name}</div>
              <div className="mt-0.5 text-xs text-[#6b6a60]">{item.price}</div>
            </div>
            <AddToCartButton className="cursor-pointer rounded-[18px] bg-red px-4 py-2.5 text-[11px] font-bold text-white transition-colors hover:bg-red-dark">
              AGREGAR
            </AddToCartButton>
          </div>
        ))}
      </div>
    </section>
  );
}
