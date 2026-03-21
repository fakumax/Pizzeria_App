"use client";

import { useState } from "react";
import { doughTypes, sizes, toppings } from "@/lib/data";
import { useCart } from "@/components/store/CartContext";

export default function PizzaBuilder() {
  const { loggedIn, login, addToCart } = useCart();

  const [size, setSize] = useState(1);
  const [dough, setDough] = useState(0);
  const [selectedToppings, setSelectedToppings] = useState<
    Record<number, boolean>
  >({});

  const toggleTopping = (i: number) =>
    setSelectedToppings((s) => ({ ...s, [i]: !s[i] }));

  let total = sizes[size].price + doughTypes[dough].mod;
  toppings.forEach((t, i) => {
    if (selectedToppings[i]) total += t.price;
  });

  if (!loggedIn) {
    return (
      <div className="rounded-[20px] bg-card p-[60px] text-center">
        <svg
          width="34"
          height="34"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#93a15a"
          strokeWidth="2"
          className="mx-auto mb-4"
          aria-hidden="true"
        >
          <rect x="4" y="10" width="16" height="10" rx="2" />
          <path d="M8 10V7a4 4 0 0 1 8 0v3" />
        </svg>
        <div className="mb-2.5 font-display text-lg font-bold">
          Iniciá sesión para armar tu propia pizza
        </div>
        <div className="mb-6 text-[13px] text-muted">
          Elegí tamaño, masa e ingredientes extra a tu gusto.
        </div>
        <button
          type="button"
          onClick={login}
          className="inline-block cursor-pointer rounded-3xl bg-red px-7 py-3.5 text-[13px] font-bold tracking-[0.3px] text-white transition-colors hover:bg-red-dark"
        >
          INICIAR SESIÓN
        </button>
      </div>
    );
  }

  return (
    <div className="grid gap-[50px] rounded-[20px] bg-card p-9 md:grid-cols-2">
      <div>
        <Step label="1. Elegí el tamaño" />
        <div className="mb-[26px] flex flex-wrap gap-2.5">
          {sizes.map((sz, i) => {
            const selected = i === size;
            return (
              <button
                key={sz.label}
                type="button"
                onClick={() => setSize(i)}
                className={`min-w-[110px] cursor-pointer rounded-xl border-[1.5px] px-4 py-3 text-left transition-colors ${
                  selected
                    ? "border-red bg-red text-white"
                    : "border-[#3a392f] bg-ink text-[#cfcdc2]"
                }`}
              >
                <div className="text-[13px] font-bold">{sz.label}</div>
                <div className="mt-0.5 text-[10.5px] opacity-80">
                  {sz.sub} · ${sz.price.toFixed(2)}
                </div>
              </button>
            );
          })}
        </div>

        <Step label="2. Elegí la masa" />
        <div className="mb-[26px] flex flex-wrap gap-2.5">
          {doughTypes.map((d, i) => {
            const selected = i === dough;
            return (
              <button
                key={d.label}
                type="button"
                onClick={() => setDough(i)}
                className={`cursor-pointer rounded-[20px] border-[1.5px] px-4 py-2.5 text-xs font-semibold transition-colors ${
                  selected
                    ? "border-red bg-red text-white"
                    : "border-[#3a392f] bg-ink text-[#cfcdc2]"
                }`}
              >
                {d.label}
              </button>
            );
          })}
        </div>

        <Step label="3. Sumá extras" />
        <div className="flex flex-col gap-2.5">
          {toppings.map((t, i) => {
            const checked = !!selectedToppings[i];
            return (
              <button
                key={t.label}
                type="button"
                onClick={() => toggleTopping(i)}
                className="flex cursor-pointer items-center gap-2.5 rounded-[10px] bg-ink px-3.5 py-2.5 text-left"
              >
                <span
                  className={`flex h-[18px] w-[18px] items-center justify-center rounded-[5px] border-[1.5px] border-olive text-[11px] text-ink ${
                    checked ? "bg-olive" : "bg-transparent"
                  }`}
                >
                  {checked ? "✓" : ""}
                </span>
                <span className="flex-1 text-[13px]">{t.label}</span>
                <span className="text-xs text-muted">
                  +${t.price.toFixed(2)}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80&auto=format&fit=crop"
          alt="Tu pizza"
          className="mb-6 h-[220px] w-[220px] rounded-full object-cover shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        />
        <div className="mb-1.5 text-xs tracking-[0.5px] text-muted uppercase">
          Total
        </div>
        <div className="mb-[22px] font-display text-[34px] font-extrabold text-olive">
          ${total.toFixed(2)}
        </div>
        <button
          type="button"
          onClick={addToCart}
          className="w-full cursor-pointer rounded-3xl bg-red py-3.5 text-[13px] font-bold tracking-[0.3px] text-white transition-colors hover:bg-red-dark"
        >
          AGREGAR AL CARRITO
        </button>
      </div>
    </div>
  );
}

function Step({ label }: { label: string }) {
  return (
    <div className="mb-3 font-display text-[13px] font-bold tracking-[0.4px] text-olive uppercase">
      {label}
    </div>
  );
}
