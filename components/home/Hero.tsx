import Link from "next/link";

const heroPizzas = [
  {
    name: "PIZZA MAMAMÍA",
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=100&q=80&auto=format&fit=crop",
    dark: true,
  },
  {
    name: "PIZZA ITALIANA",
    img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=100&q=80&auto=format&fit=crop",
    dark: false,
  },
  {
    name: "PIZZA VEGETARIANA",
    img: "https://images.unsplash.com/photo-1571066811602-716837d681de?w=100&q=80&auto=format&fit=crop",
    dark: false,
  },
  {
    name: "PIZZA PEPPERONI",
    img: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=100&q=80&auto=format&fit=crop",
    dark: false,
  },
];

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-[1400px] items-center gap-10 px-6 pt-10 pb-[70px] md:grid-cols-2 md:px-[60px]">
      <div>
        <h1 className="mb-8 font-display text-[38px] leading-[1.12] font-bold uppercase md:text-[52px]">
          Recién horneada,
          <br />
          perfectamente quesuda,
          <br />
          siempre <span className="text-olive">deliciosa.</span>
        </h1>
        <div className="flex max-w-[340px] flex-col gap-3.5">
          {heroPizzas.map((p) => (
            <Link
              key={p.name}
              href="/menu"
              className={`flex cursor-pointer items-center justify-between rounded-[10px] px-[18px] py-3.5 ${
                p.dark
                  ? "border-[1.5px] border-red bg-card"
                  : "bg-cream"
              }`}
            >
              <span
                className={`font-display text-sm font-bold tracking-[0.3px] ${
                  p.dark ? "text-white" : "text-ink"
                }`}
              >
                {p.name}
              </span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.img}
                alt={p.name}
                className="h-8 w-8 rounded-full object-cover"
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="relative flex h-[440px] items-center justify-center">
        <div className="absolute top-[20%] right-0 z-0 h-[65%] w-[60%] rotate-[-8deg] rounded-3xl bg-red" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700&q=80&auto=format&fit=crop"
          alt="Pizza principal"
          className="relative z-[1] h-[380px] w-[380px] rounded-full object-cover shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
        />
        <span className="absolute top-[8%] left-[6%] z-[2] h-[26px] w-[26px] rounded-full bg-[radial-gradient(circle_at_30%_30%,#e35b45,#a3271b)]" />
        <span className="absolute top-[2%] left-[16%] z-[2] h-5 w-5 rounded-full bg-[radial-gradient(circle_at_30%_30%,#e35b45,#a3271b)]" />
        <span className="absolute bottom-[14%] left-[2%] z-[2] h-[22px] w-[22px] rounded-full bg-[radial-gradient(circle_at_30%_30%,#e35b45,#a3271b)]" />
        <span className="absolute top-[4%] right-[8%] z-[2] h-5 w-[34px] rotate-[35deg] rounded-[50%_50%_50%_0] bg-[#7a9a4e]" />
        <span className="absolute right-[2%] bottom-[20%] z-[2] h-4 w-7 rotate-[-20deg] rounded-[50%_50%_50%_0] bg-[#7a9a4e]" />
      </div>
    </section>
  );
}
