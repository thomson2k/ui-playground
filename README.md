This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

# comparison

## Chakra UI

Documentation: Well written documentation with many examples. Additionaly we can find many pre-build templates such as: https://chakra-templates.dev/navigation/navbar
Usage: Straigh-forward
Cons:
-  Chakra UI works somewhat fine with SSR with the old /pages, but it doesn't work yet with the new /app directory to use it we can add 'use client' on top file but then they'll be CSR not SSR TLDR: Chakra doesn’t support SSR.
Pros:
- big community
- components