const features = [
  {
    title: "TU PIZZA, A TU MANERA",
    desc: "Personaliza tu masa, ingredientes y sabores. Tu pizza tan única como tú.",
    icon: (
      <>
        <rect x="1" y="7" width="14" height="9" />
        <path d="M15 10h4l3 4v2h-7z" />
        <circle cx="6" cy="18" r="1.6" />
        <circle cx="18" cy="18" r="1.6" />
      </>
    ),
  },
  {
    title: "RECIÉN HORNEADA",
    desc: "Cada pizza se hace a mano y se hornea a la perfección en nuestros hornos.",
    icon: (
      <>
        <path d="M12 3 C7 3 3 8 3 13a9 9 0 0 0 18 0c0-5-4-10-9-10z" />
        <path d="M12 8v10" />
      </>
    ),
  },
  {
    title: "HECHA CON AMOR",
    desc: "Cada rebanada mezcla tradición e innovación para satisfacer cada antojo.",
    icon: (
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
    ),
  },
  {
    title: "INGREDIENTES DE CALIDAD",
    desc: "Vegetales y salsas frescas del campo, solo lo mejor para un sabor inolvidable.",
    icon: (
      <>
        <path d="M12 22s7-4.5 7-11a7 7 0 0 0-14 0c0 6.5 7 11 7 11z" />
        <path d="M12 11v6" />
      </>
    ),
  },
];

export default function About() {
  return (
    <section
      id="nosotros"
      className="mx-auto grid max-w-[1400px] scroll-mt-24 items-center gap-[50px] px-6 pt-5 pb-[90px] md:grid-cols-[1.1fr_0.9fr] md:px-[60px]"
    >
      <div>
        <h2 className="mb-7 font-display text-2xl uppercase md:text-3xl">
          Sobre <span className="text-olive">nosotros</span>
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-red p-5"
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#c23b2c"
                strokeWidth="2"
                className="mb-2.5"
                aria-hidden="true"
              >
                {f.icon}
              </svg>
              <div className="mb-1.5 font-display text-sm font-bold text-red">
                {f.title}
              </div>
              <div className="text-[12.5px] leading-normal text-muted">
                {f.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex items-center justify-center">
        <svg
          viewBox="0 0 300 300"
          className="absolute h-[340px] w-[340px] animate-[spin_22s_linear_infinite]"
          aria-hidden="true"
        >
          <defs>
            <path
              id="circlepath"
              d="M150,150 m-128,0 a128,128 0 1,1 256,0 a128,128 0 1,1 -256,0"
            />
          </defs>
          <text
            fontFamily="var(--font-baloo)"
            fontSize="13"
            fontWeight="700"
            fill="#f3ead9"
            letterSpacing="2"
          >
            <textPath href="#circlepath" startOffset="0%">
              RECIÉN HORNEADA · HECHA CON AMOR · SIEMPRE FRESCA · &#160;
            </textPath>
          </text>
        </svg>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1544982503-9f984c14501a?w=500&q=80&auto=format&fit=crop"
          alt="Pizza artesanal"
          className="relative h-[250px] w-[250px] rounded-full object-cover"
        />
      </div>
    </section>
  );
}
