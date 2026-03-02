const commitments = [
  {
    title: "Entrega rápida",
    desc: "Caliente y fresca en 30 minutos o menos.",
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
    title: "Zonas de entrega",
    desc: "Encuentra tu PizzaMago más cercano en Misiones.",
    icon: (
      <>
        <circle cx="12" cy="9" r="2.4" />
        <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7z" />
      </>
    ),
  },
  {
    title: "Horario de atención",
    desc: "Entregamos todos los días de 11 am a 12 am.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </>
    ),
  },
];

export default function Commitments() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-[70px] text-center md:px-[60px]">
      <h2 className="mb-12 font-display text-2xl uppercase md:text-3xl">
        Nuestros <span className="text-olive">compromisos</span>
      </h2>
      <div className="grid gap-10 md:grid-cols-3">
        {commitments.map((c) => (
          <div key={c.title}>
            <div className="mx-auto mb-[18px] flex h-[70px] w-[70px] items-center justify-center rounded-full bg-cream">
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#141310"
                strokeWidth="2"
                aria-hidden="true"
              >
                {c.icon}
              </svg>
            </div>
            <div className="mb-2 font-display text-base font-bold uppercase">
              {c.title}
            </div>
            <div className="text-[13px] leading-normal text-muted">
              {c.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
