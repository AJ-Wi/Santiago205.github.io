export default {
  title: "SoySiriusXYZ",
  titleTemplate: "SoySiriusXYZ | :title",
  description: "El destino definitivo para todo lo relacionado con videojuegos.",
  lastUpdated: true,
  head: [["link", { rel: "icon", href: "/assets/img/favicon.ico", type: "image/svg" }]],
  themeConfig: {
    siteTitle: "Soy Sirius XYZ",
    logo: "/assets/img/logo-main.jpg",
    socialLinks: [{ icon: "github", link: "https://github.com/wipodev" }],
    nav: [
      { text: "Inicio", link: "/" },
      { text: "YouTube", link: "/youtube/" },
      { text: "Habilidades", link: "/skills/" },
    ],
    footer: {
      message: "Publicado bajo la licencia MIT.",
      copyright: 'Copyright © 2023-presente <a href="https://github.com/wipodev">WipoDev</a>',
    },
  },
};
