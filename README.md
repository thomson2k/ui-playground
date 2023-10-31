
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

  

## Getting Started

  

First, run the development server:

  

```bash

npm  run  dev

# or

yarn  dev

# or

pnpm  dev

# or

bun  dev

```

  

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

  

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

  

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

  

# Comparison

  

## Chakra UI
1.  Offers a more customizable theme and the ability to create custom variants and styles
2.  Provides a well-organized theming system
3.  Known for its mature and well-established library
4.  Offers good default styling but may require more configuration to meet specific design needs
5.  Has good established community
  

**Documentation**: Well written documentation with many examples. Additionaly we can find many pre-build templates such as: https://chakra-templates.dev/navigation/navbar

**Cons**:

- Chakra UI works somewhat fine with SSR with the old /pages, but it doesn't work yet with the new /app directory to use it we can add 'use client' on top file but then they'll be CSR not SSR 
**TLDR:** Chakra doesn’t support SSR.

**Pros**:

- big community

- components


## Mantine
1.  Offers a wide range of components and has more quantity of components.
2.  Provides cleaner and more straightforward documentation
3.  Defaults in Mantine require fewer overrides and are considered better out of the box
4.  Components are designed to work efficiently without needing extensive configuration
5.  May have more efficient handling of responsive design

**Documentation:** Well written contains many example. A lot of components, hooks etc. Basically have similar experience to Chakra UI. 

**Cons:**
- some things doesn't works on server side
- configuratrion api is a bit messy, less elegant I'd say bad for scaling

**Pros:**

- contains many ready to go components - https://ui.mantine.dev/
