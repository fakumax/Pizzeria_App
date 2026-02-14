const columns = [
  {
    title: "TIENDA",
    items: ["Vender en línea", "Sucursales", "Venta minorista", "Funciones"],
  },
  {
    title: "UBICACIÓN",
    items: ["Posadas", "Oberá", "Eldorado", "Puerto Iguazú"],
  },
  {
    title: "NOSOTROS",
    items: ["Contacto", "Servicios", "Equipo", "Ofertas"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-cream px-6 pt-14 pb-8 md:px-[60px]">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-8 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
        <div>
          <div className="mb-3 font-display text-[19px] font-extrabold text-ink">
            PIZZAMAGO
          </div>
          <div className="max-w-[280px] text-[12.5px] leading-relaxed text-[#6b6a60]">
            PizzaMago sirve pizzas frescas, calientes y llenas de sabor directo
            a tu puerta.
          </div>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <div className="mb-3.5 text-xs font-bold tracking-[0.5px] text-ink">
              {col.title}
            </div>
            <div className="flex flex-col gap-2.5 text-[12.5px] text-[#6b6a60]">
              {col.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-8 flex max-w-[1400px] flex-col gap-4 border-t border-black/10 pt-5.5 md:flex-row md:items-center md:justify-between">
        <div className="flex gap-6 text-xs text-[#6b6a60]">
          <span>Política de privacidad</span>
          <span>Términos y condiciones</span>
        </div>
        <div className="flex gap-3.5">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#141310" aria-hidden="true">
            <path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.4-1.3 1.7-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3.4 4.6a4.1 4.1 0 0 0 1.3 5.5c-.6 0-1.2-.2-1.7-.5v.1c0 2 1.4 3.6 3.3 4a4.1 4.1 0 0 1-1.9.1 4.1 4.1 0 0 0 3.8 2.9A8.3 8.3 0 0 1 2 18.4a11.6 11.6 0 0 0 6.3 1.9c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.2z" />
          </svg>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#141310" aria-hidden="true">
            <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.3-1.5 1.6-1.5h1.7V3.7c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.2v2h-2.7v3.1h2.7v8h3.1z" />
          </svg>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#141310" strokeWidth="1.6" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="4" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" />
          </svg>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#141310" strokeWidth="1.6" aria-hidden="true">
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18M12 3a13 13 0 0 1 0 18 13 13 0 0 1 0-18z" />
          </svg>
        </div>
      </div>
      <div className="mx-auto mt-4 max-w-[1400px] text-[11.5px] text-[#8a8878]">
        PizzaMago te trae el pedazo perfecto de felicidad con pizzas recién
        horneadas, ingredientes premium y sabores hechos para satisfacer cada
        antojo.
      </div>
    </footer>
  );
}
