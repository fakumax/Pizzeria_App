import type { Metadata } from "next";
import FlavorGrid from "@/components/menu/FlavorGrid";
import PizzaBuilder from "@/components/menu/PizzaBuilder";

export const metadata: Metadata = {
  title: "Menú — PizzaMago",
  description:
    "Elegí tu sabor favorito y el tipo de masa, o armá tu propia pizza con el tamaño, la masa y los extras que quieras.",
};

export default function MenuPage() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 pt-5 pb-5 md:px-[60px]">
      <h1 className="mb-1.5 font-display text-[32px] uppercase md:text-4xl">
        Nuestro <span className="text-olive">menú</span>
      </h1>
      <p className="mb-10 max-w-[640px] text-sm text-muted">
        Elegí tu sabor favorito y el tipo de masa. ¿Preferís crearla vos mismo?
        Iniciá sesión y armá tu propia pizza más abajo.
      </p>

      <FlavorGrid />

      <div className="mb-20 border-t border-[#2a2920] pt-[50px]">
        <h2 className="mb-2 font-display text-2xl uppercase md:text-[28px]">
          Armá <span className="text-olive">tu propia pizza</span>
        </h2>
        <p className="mb-[30px] text-[13.5px] text-muted">
          Disponible para usuarios con sesión iniciada.
        </p>
        <PizzaBuilder />
      </div>
    </section>
  );
}
