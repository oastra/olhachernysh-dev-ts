This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## ✨ Custom Typography System

Our project uses a utility-based typography system defined in `typography.css` using Tailwind’s `@layer components`.

### 🪄 Class Naming Convention

Each heading level has variants for desktop, tablet, and mobile:

| Class Name       | Description                    |
| ---------------- | ------------------------------ |
| `text-h1`        | H1 for large screens           |
| `text-h1-tablet` | H1 for tablets                 |
| `text-h1-mobile` | H1 for mobile                  |
| `text-body`      | Base paragraph/body text       |
| `text-cta`       | CTA button text                |
| `text-footer`    | Large footer text (decorative) |

---

### ✅ Example Usage

```tsx
<h1 className="text-h1-mobile md:text-h1-tablet lg:text-h1">
  Websites That Work
</h1>

<p className="text-body">
  Unique selling proposition: developer, clean code, no templates.
</p>

```

# olhachernysh.dev
