import { flavors } from "@/lib/data";
import FlavorCard from "@/components/menu/FlavorCard";

export default function FlavorGrid() {
  return (
    <div className="mb-[70px] grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {flavors.map((flavor) => (
        <FlavorCard key={flavor.name} flavor={flavor} />
      ))}
    </div>
  );
}
