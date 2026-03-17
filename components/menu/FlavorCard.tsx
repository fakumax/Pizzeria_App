"use client";

import { useState } from "react";
import { doughTypes, type Flavor } from "@/lib/data";
import { useCart } from "@/components/store/CartContext";

export default function FlavorCard({ flavor }: { flavor: Flavor }) {
  const [doughIdx, setDoughIdx] = useState(0);
  const { addToCart } = useCart();

  const total = (flavor.price + doughTypes[doughIdx].mod).toFixed(2);

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl bg-card">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={flavor.img}
        alt={flavor.name}
        className="h-40 w-full object-cover"
      />
      <div className="flex flex-1 flex-col p-[18px]">
        <div className="font-display text-base font-bold uppercase">
          {flavor.name}
        </div>
        <div className="mt-1 mb-3 text-xs leading-normal text-muted">
          {flavor.desc}
        </div>
        <div className="mb-3.5 flex flex-wrap gap-1.5">
          {doughTypes.map((d, i) => {
            const selected = i === doughIdx;
            return (
              <button
                key={d.label}
                type="button"
                onClick={() => setDoughIdx(i)}
                className={`cursor-pointer rounded-[14px] border-[1.3px] px-2.5 py-1.5 text-[10.5px] font-semibold transition-colors ${
                  selected
                    ? "border-red bg-red text-white"
                    : "border-[#55534a] bg-transparent text-[#cfcdc2]"
                }`}
              >
                {d.label}
              </button>
            );
          })}
        </div>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-base font-bold text-olive">${total}</span>
          <button
            type="button"
            onClick={addToCart}
            className="cursor-pointer rounded-[18px] bg-red px-4 py-2.5 text-[11px] font-bold text-white transition-colors hover:bg-red-dark"
          >
            AGREGAR
          </button>
        </div>
      </div>
    </div>
  );
}
