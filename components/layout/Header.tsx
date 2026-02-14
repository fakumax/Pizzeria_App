"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/components/store/CartContext";

export default function Header() {
  const pathname = usePathname();
  const { cartCount, loggedIn, toggleLogin } = useCart();

  const isHome = pathname === "/";
  const isMenu = pathname === "/menu";

  return (
    <header className="mx-auto flex max-w-[1400px] items-center justify-between px-6 pt-6 pb-2.5 md:px-[60px]">
      <Link href="/" className="flex cursor-pointer items-center gap-2.5">
        <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
          <circle cx="15" cy="15" r="14" fill="#c23b2c" />
          <path d="M15 6 L23 22 A10 10 0 0 1 7 22 Z" fill="#f3ead9" />
          <circle cx="15" cy="14" r="1.6" fill="#c23b2c" />
          <circle cx="12" cy="18" r="1.3" fill="#c23b2c" />
          <circle cx="18" cy="18" r="1.3" fill="#c23b2c" />
        </svg>
        <span className="font-display text-[21px] font-extrabold tracking-[0.3px]">
          PIZZA<span className="text-red">MAGO</span>
        </span>
      </Link>

      <nav className="hidden gap-11 md:flex">
        <Link
          href="/"
          className={`text-[13px] tracking-[0.5px] ${
            isHome ? "font-bold text-white" : "font-medium text-muted"
          }`}
        >
          INICIO
        </Link>
        <Link
          href="/menu"
          className={`text-[13px] tracking-[0.5px] ${
            isMenu ? "font-bold text-white" : "font-medium text-muted"
          }`}
        >
          MENÚ
        </Link>
        <Link
          href="/#nosotros"
          className="text-[13px] font-semibold tracking-[0.5px] text-[#efece5]"
        >
          NOSOTROS
        </Link>
        <Link
          href="/#preguntas"
          className="text-[13px] font-semibold tracking-[0.5px] text-[#efece5]"
        >
          PREGUNTAS
        </Link>
      </nav>

      <div className="flex items-center gap-4">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#efece5"
          strokeWidth="2"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#efece5"
          strokeWidth="2"
          aria-hidden="true"
        >
          <title>Idioma</title>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a13 13 0 0 1 0 18 13 13 0 0 1 0-18z" />
        </svg>
        <Link href="/menu" className="relative cursor-pointer" aria-label="Carrito">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#efece5"
            strokeWidth="2"
            aria-hidden="true"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2.5 flex h-[15px] w-[15px] items-center justify-center rounded-full bg-red text-[9px] font-bold text-white">
              {cartCount}
            </span>
          )}
        </Link>
        <button
          type="button"
          onClick={toggleLogin}
          className="cursor-pointer"
          aria-label={loggedIn ? "Cerrar sesión" : "Iniciar sesión"}
          aria-pressed={loggedIn}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke={loggedIn ? "#93a15a" : "#efece5"}
            strokeWidth="2"
            aria-hidden="true"
          >
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
          </svg>
        </button>
      </div>
    </header>
  );
}
