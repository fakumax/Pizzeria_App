export type Dough = {
  label: string;
  /** Price modifier added to the base price of a pizza. */
  mod: number;
};

export type Flavor = {
  name: string;
  desc: string;
  price: number;
  img: string;
};

export type Size = {
  label: string;
  sub: string;
  price: number;
};

export type Topping = {
  label: string;
  price: number;
};

export const doughTypes: Dough[] = [
  { label: "Tradicional", mod: 0 },
  { label: "Fina y Crocante", mod: 0 },
  { label: "Media Masa", mod: 0.5 },
  { label: "Integral", mod: 0.75 },
  { label: "Sin TACC", mod: 2.5 },
];

export const flavors: Flavor[] = [
  {
    name: "Margarita",
    desc: "Tomate, mozzarella y albahaca fresca.",
    price: 8.99,
    img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=80&auto=format&fit=crop",
  },
  {
    name: "Napolitana",
    desc: "Tomate, mozzarella, ajo y orégano.",
    price: 9.49,
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80&auto=format&fit=crop",
  },
  {
    name: "Pepperoni",
    desc: "Pepperoni en cada bocado con mozzarella.",
    price: 9.99,
    img: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=500&q=80&auto=format&fit=crop",
  },
  {
    name: "Cuatro Quesos",
    desc: "Mozzarella, provolone, roquefort y parmesano.",
    price: 10.49,
    img: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=500&q=80&auto=format&fit=crop",
  },
  {
    name: "Vegetariana",
    desc: "Morrones, cebolla, champiñones y aceitunas.",
    price: 9.49,
    img: "https://images.unsplash.com/photo-1571066811602-716837d681de?w=500&q=80&auto=format&fit=crop",
  },
  {
    name: "Fugazzeta",
    desc: "Cebolla caramelizada, mozzarella y orégano.",
    price: 10.49,
    img: "https://images.unsplash.com/photo-1544982503-9f984c14501a?w=500&q=80&auto=format&fit=crop",
  },
  {
    name: "Calabresa",
    desc: "Longaniza calabresa, cebolla y mozzarella.",
    price: 9.99,
    img: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=500&q=80&auto=format&fit=crop",
  },
  {
    name: "Jamón y Morrones",
    desc: "Jamón cocido, morrones y mozzarella.",
    price: 9.99,
    img: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=500&q=80&auto=format&fit=crop",
  },
  {
    name: "Rúcula y Jamón Crudo",
    desc: "Jamón crudo, rúcula fresca y parmesano.",
    price: 11.49,
    img: "https://images.unsplash.com/photo-1544982503-9f984c14501a?w=500&q=80&auto=format&fit=crop",
  },
  {
    name: "Provolone",
    desc: "Provolone derretido, orégano y oliva.",
    price: 10.49,
    img: "https://images.unsplash.com/photo-1571066811602-716837d681de?w=500&q=80&auto=format&fit=crop",
  },
  {
    name: "Hawaiana",
    desc: "Jamón, ananá y mozzarella.",
    price: 9.49,
    img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=80&auto=format&fit=crop",
  },
  {
    name: "Especial de la Casa",
    desc: "Panceta, huevo, morrones, aceitunas y mozzarella.",
    price: 11.99,
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80&auto=format&fit=crop",
  },
];

export const sizes: Size[] = [
  { label: "Individual", sub: "1 porción", price: 6.99 },
  { label: "Mediana", sub: "4 porciones", price: 10.99 },
  { label: "Grande", sub: "8 porciones", price: 14.99 },
  { label: "Familiar", sub: "12 porciones", price: 18.99 },
];

export const toppings: Topping[] = [
  { label: "Aceitunas", price: 0.75 },
  { label: "Jamón", price: 1.0 },
  { label: "Champiñones", price: 0.75 },
  { label: "Extra Muzzarella", price: 1.25 },
];
