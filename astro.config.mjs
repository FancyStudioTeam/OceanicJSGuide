import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Oceanic Guide",
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
        es: {
          label: 'Español',
          lang: 'es',
        },
      },
      description: "A NodeJS library for interfacing with Discord",
      logo: {
        src: "./src/assets/Iso.svg",
        replacesTitle: true,
      },
      social: {
        discord: "https://discord.gg/xZ4AhdYrf9",
        github: "https://github.com/FancyStudioTeam/OceanicJSGuide",
      },
      sidebar: [
        {
          label: "Home",
          autogenerate: {
            directory: "home",
          },
        },
        {
          label: "Creating The Bot",
          autogenerate: {
            directory: "creating-the-bot",
          },
        },
      ],
      customCss: [
        "./src/assets/styles/Custom.css",
        "@fontsource/poppins/400.css",
        "@fontsource/poppins/600.css",
      ],
      expressiveCode: {
        useStarlightDarkModeSwitch: false,
      },
      components: {
        ThemeSelect: undefined,
        ThemeProvider: undefined,
      },
    }),
    tailwind(),
  ],
});
