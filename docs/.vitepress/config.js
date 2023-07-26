export default {
  title: "SiriusX",
  titleTemplate: "SiriusX | :title",
  description: "El destino definitivo para todo lo relacionado con videojuegos.",
  lastUpdated: true,
  head: [["link", { rel: "icon", href: "/assets/img/favicon.ico", type: "image/svg" }]],
  srcDir: "./src",
  themeConfig: {
    siteTitle: "SiriusX",
    logo: "/assets/img/logo-main.png",
    socialLinks: [{ icon: "github", link: "https://github.com/wipodev" }],
    nav: [
      { text: "Inicio", link: "/" },
      { text: "YouTube", link: "/youtube/" },
      { text: "prueba", link: "/prueba/" },
    ],
    footer: {
      message: "Publicado bajo la licencia MIT.",
      copyright: 'Copyright © 2023-presente <a href="https://github.com/wipodev">WipoDev</a>',
    },
  },
};
