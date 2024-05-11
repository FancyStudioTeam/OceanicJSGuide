import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

export default defineConfig({
  integrations: [
    starlight({
      title: "Oceanic Guide",
      description: "A NodeJS library for interfacing with Discord",
      logo: {
        src: "./src/assets/Iso.svg",
        replacesTitle: true,
      },
      social: {
        discord: "https://discord.gg/xZ4AhdYrf9",
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
  ],
});
