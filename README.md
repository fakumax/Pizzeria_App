# 🍕 PizzaMago

Sitio de una pizzería artesanal construido como proyecto de portfolio. Incluye
una landing con secciones (hero, más vendidos, sobre nosotros, compromisos,
ofertas y reseñas) y una página de menú con selector de masa por sabor y un
**armador de pizza** paso a paso disponible al iniciar sesión.

No usa base de datos: todos los datos (sabores, masas, tamaños y extras) viven
en el código, en [`lib/data.ts`](lib/data.ts).

## Stack

- **Node 24**
- **Next.js 16** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **pnpm**

El estado del carrito y de la sesión se maneja con un React Context
([`components/store/CartContext.tsx`](components/store/CartContext.tsx)).

## Desarrollo

```bash
pnpm install
pnpm dev
```

La app queda disponible en [http://localhost:3000](http://localhost:3000).

## Scripts

| Script       | Descripción                  |
| ------------ | ---------------------------- |
| `pnpm dev`   | Servidor de desarrollo       |
| `pnpm build` | Build de producción          |
| `pnpm start` | Sirve el build de producción |
| `pnpm lint`  | Linter (ESLint)              |

## Estructura

```
app/               Rutas (/, /menu) y layout raíz
components/
  home/            Secciones de la landing
  menu/            Grilla de sabores + armador de pizza
  layout/          Header y Footer
  store/           CartContext (carrito + sesión)
  ui/              Componentes reutilizables
lib/data.ts        Datos del menú (sin base de datos)
```

## Deploy

Pensado para desplegarse en [Vercel](https://vercel.com) sin configuración
adicional.
