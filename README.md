
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

  

## Getting Started

  
**Each UI system is on individual branch.**

Install packages on each branch e.g. using npm:
```bash
npm install
```
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

## Popularity
![enter image description here](https://i.postimg.cc/gJWg7sWh/d.png)
  

## [Chakra UI](https://chakra-ui.com/) 
Personal rating: ⭐ ⭐ ⭐ ⭐ ⭐ 
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


## [Mantine](https://ui.mantine.dev/) 
Personal rating: ⭐ ⭐ ⭐ ⭐ ⭐ 
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
- offers various theming option
- easily customize the styles and components 

## [Ant dev](https://ant.design/)

Personal rating: ⭐ ⭐ ★
-   Ant Design is a robust and mature UI library with a wide range of components. It is well-suited for complex interfaces like e-commerce checkouts and dashboards.
-   It provides comprehensive solutions for data visualization and management, making it a strong choice for dashboard development.
-   Its documentation is extensive, and it has a large user community, which can be helpful for troubleshooting.
- imo OVERHYPED

**Pros:**

1.  Rich component library
2.  Ensures consistency in design
3.  Prioritizes accessibility
4.  Actively maintained and updated
5.  Built-in internationalization support
6.  Extensive theming capabilities
7.  Strong community and documentation
8. Support SSR

**Cons:**

1.  Can result in larger bundle sizes
2.  Complex to learn and configure, especially for beginners
3.  Design customization can be challenging
4.  Enforces its design principles
5.  Learning curve
6.  May not accommodate every unique design requirement


## [Shadcn UI](https://ui.shadcn.com/)

Personal rating: ⭐ ⭐ ⭐ 

It's a template library based on Radix UI and Tailwind CSS

**Cons:**
- for each component you need install it additionally 
-  it's a newer library, might have smaller support base
- smaller support base

**Pros:**
- everything looks super clean and futuristic

## Summary
1.  **Customization**:
    
     
    -   **Chakra UI**: Chakra UI is highly customizable and provides a theming system that allows you to adapt the UI to your needs. It's known for its flexibility in terms of customization.
        
    -   **Mantine**: Mantine is designed with customization in mind. It offers various theming options, and you can easily customize the styles and components to match your project's design.
      -   **Ant Design**: Ant Design provides a range of customization options, allowing you to change colors, typography, and styles. However, it can be less flexible for extensive customizations due to its strict design language.
        
    -   **Shadcn/UI**: Shadcn/UI is relatively new, and the extent of customization options may vary. Depending on your project requirements, it might have limited flexibility compared to more established libraries.
        
2.  **Component Library**:
    
        
    -   **Chakra UI**: Chakra UI offers a good variety of components, but it might not have as extensive a library as Ant Design. It focuses on essential components and is highly extensible.
        
    -   **Mantine**: Mantine provides a smaller but well-rounded component library, suitable for various web applications, including dashboards and admin panels.
       -   **Ant Design**: Ant Design has a comprehensive set of components, making it suitable for building complex applications like admin panels and dashboards.
    -   **Shadcn/UI**: The component library in Shadcn/UI may be limited compared to more established frameworks. It might be more suitable for projects with simpler requirements.
        
3.  **Integration with Next.js**:

        
    -   **Chakra UI**: Chakra UI is known for its ease of integration with Next.js, and it provides official documentation for seamless setup.
        
    -   **Mantine**: Mantine is compatible with Next.js, and you can find resources and examples for integrating it into Next.js applications.
    
    -   **Ant Design**: Ant Design and Chakra UI both provide good support for integration with Next.js, and you can find documentation and examples for this purpose.
    -   **Shadcn/UI**: Integration with Next.js may depend on community-contributed resources, as it's a newer library. Be prepared for a potentially smaller support base.
        
4.  **Community and Documentation**:
        
    -   **Chakra UI**: Chakra UI has a growing community and good documentation, with regular updates and improvements.
        
    -   **Mantine**: Mantine's community is smaller than some of the bigger players, but it's active and responsive to user needs. Documentation is generally good.
    -   **Ant Design**: Ant Design has a large and active community, along with comprehensive documentation.
    -   **Shadcn/UI**: Being a newer library, Shadcn/UI may have a smaller community and documentation base compared to more established options.

###  ***See more details about maintaince, popularity, security and community:***
**Chakra**: https://snyk.io/advisor/npm-package/@chakra-ui/next-js

**Mantine**: https://snyk.io/advisor/npm-package/@mantine/core

**Andt**: https://snyk.io/advisor/npm-package/antd

**Shadzn**: Since is build with tailwidn and radix:

https://snyk.io/advisor/npm-package/radix-ui

https://snyk.io/advisor/npm-package/tailwindcss
