const reviews = [
  {
    name: "MARCO DÍAZ",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "La mejor pizza de la ciudad. La masa queda perfectamente crujiente y el queso se derrite en tu boca.",
    raised: true,
  },
  {
    name: "LÍA SOTO",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "PizzaMago nunca decepciona. Entrega rápida, pizza caliente y sabores que aciertan siempre.",
    raised: false,
  },
  {
    name: "NICOLÁS JARA",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    text: "Me encantaron los ingredientes frescos y la variedad. Por fin una pizzería premium y accesible.",
    raised: true,
  },
];

export default function Reviews() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 pt-5 pb-[100px] text-center md:px-[60px]">
      <h2 className="mb-[50px] font-display text-2xl uppercase md:text-3xl">
        Reseñas de <span className="text-olive">clientes</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-[34px]">
        {reviews.map((r) => (
          <div
            key={r.name}
            className={`flex h-[280px] w-[280px] flex-col items-center justify-center rounded-full bg-cream p-[34px] ${
              r.raised ? "md:mt-[30px]" : ""
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={r.avatar}
              alt={r.name}
              className="mb-3 h-14 w-14 rounded-full border-[3px] border-cream object-cover shadow-[0_0_0_2px_#c23b2c]"
            />
            <div className="mb-2 font-display text-[15px] font-bold text-ink">
              {r.name}
            </div>
            <div className="text-[11.5px] leading-normal text-[#5c5b52]">
              &ldquo;{r.text}&rdquo;
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
