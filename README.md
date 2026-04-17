# Foodzy Exam

Bu loyiha `React` asosida qurilgan front-end web app bo'lib, unda e-commerce uslubidagi sahifalar mavjud: home, shop, product detail, cart, checkout, blog va FAQ.

## Ishlatilgan tillar

- `JavaScript` - asosiy dasturlash tili
- `JSX` - React component yozish uchun
- `TypeScript/TSX` - loyihadagi ayrim componentlarda ishlatilgan
- `CSS` - global stillar va UI sozlamalari uchun

## Ishlatilgan texnologiyalar

- `React 18` - asosiy UI kutubxonasi
- `Vite` - development server va build tool
- `React Router DOM` - sahifalar orasida routing qilish uchun
- `TanStack React Query` - serverdan kelgan ma'lumotlarni fetch qilish, cache qilish va boshqarish uchun
- `Axios` - API so'rovlarini yuborish uchun
- `Zustand` - local state va cart state boshqaruvi uchun
- `Zustand Persist Middleware` - cart ma'lumotlarini saqlab qolish uchun
- `Tailwind CSS` - utility-first styling uchun
- `PostCSS` - CSS processing uchun
- `Autoprefixer` - CSS vendor prefix qo'shish uchun
- `Lucide React` - ikonlar uchun
- `Swiper` - slider/carousel funksiyalari uchun
- `ESLint` - kod sifatini tekshirish uchun

## Loyiha ichida qayerda nima ishlatilgan

### 1. React

React butun loyiha asosiy frameworki sifatida ishlatilgan.

- `src/main.jsx` - app render qilinadi
- `src/Pages/*` - page componentlar
- `src/Components/*` - reusable componentlar

### 2. React Router DOM

Routing `createBrowserRouter`, `RouterProvider`, `lazy`, `Suspense` orqali qilingan.

- `src/Router/index.jsx` - barcha route'lar shu yerda yozilgan

Ishlatilgan sahifalar:

- `/`
- `/shop`
- `/product/:id`
- `/cart`
- `/checkout`
- `/blog`
- `/blog/:id`
- `/faq`

### 3. TanStack React Query

API dan keladigan data query va cache qilish uchun ishlatilgan.

- `src/main.jsx` - `QueryClient` va `QueryClientProvider`
- `src/Hooks/useProducts.js`
- `src/Hooks/useCategories.js`
- `src/Hooks/useBlogs.js`
- ayrim page'larda to'g'ridan-to'g'ri query ishlatilgan

Asosiy vazifalari:

- ma'lumotni fetch qilish
- cache saqlash
- loading holatini boshqarish
- qayta fetch logikasini boshqarish

### 4. Axios

Backend yoki API bilan ishlash uchun `axios` ishlatilgan.

- `src/Api/axiosClient.js` - axios instance
- `src/Api/products.js`
- `src/Api/categories.js`
- `src/Api/blogs.js`

### 5. Zustand

Global state management uchun ishlatilgan.

- `src/Store/cartStore.js` - cart state

Bu yerda:

- mahsulot qo'shish
- mahsulot sonini boshqarish
- cartni tozalash
- persist orqali local storage'da saqlash

### 6. Tailwind CSS

UI stylingning katta qismi Tailwind utility classlar bilan yozilgan.

- `tailwind.config.js` - Tailwind config
- `src/index.css` - global style
- deyarli barcha `jsx` componentlarda Tailwind classlar ishlatilgan

### 7. Vite

Loyiha bundler va dev server sifatida `Vite` dan foydalanadi.

- `vite.config.js` - Vite config
- `package.json` scripts:
  - `npm run dev`
  - `npm run build`
  - `npm run preview`

### 8. ESLint

Koddagi xatolar va best practice'larni tekshirish uchun ishlatilgan.

- `eslint.config.js`

Run qilish:

- `npm run lint`

### 9. Lucide React

Ikonlar uchun ishlatilgan.

Masalan:

- `src/Components/Layout/Header.jsx`
- boshqa UI componentlarda

### 10. Swiper

Slider yoki carousel kerak bo'ladigan UI qismlar uchun dependency sifatida ulangan.

- `package.json` ichida mavjud

### 11. TypeScript / TSX

Loyihaning asosiy qismi `JavaScript + JSX` bo'lsa ham, ayrim joylarda `TSX` fayllar ham bor.

Masalan:

- `src/Components/product/ProductCard.tsx`
- `src/Components/product/ProductGrid.tsx`
- `src/Components/product/ProductFilters.tsx`

## Papkalar tuzilmasi

```bash
src/
  Api/            # API requestlar
  Components/     # UI va layout componentlar
  Hooks/          # React Query hooklar
  Pages/          # Route sahifalar
  Router/         # Router config
  Store/          # Zustand store
  Utils/          # helper funksiyalar
  assets/         # image va iconlar
```

## NPM scriptlar

- `npm run dev` - development serverni ishga tushiradi
- `npm run build` - production build yaratadi
- `npm run preview` - build natijasini preview qiladi
- `npm run lint` - lint tekshiruvini ishga tushiradi

## Qisqa xulosa

Bu loyihada asosan quyidagi stack ishlatilgan:

- `JavaScript / JSX`
- `React`
- `Vite`
- `React Router DOM`
- `TanStack React Query`
- `Axios`
- `Zustand`
- `Tailwind CSS`
- `ESLint`
- `Lucide React`

