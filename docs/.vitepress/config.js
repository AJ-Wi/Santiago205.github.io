export default {
  title: "SiriusX",
  titleTemplate: "SiriusX | :title",
  description: "El destino definitivo para todo lo relacionado con videojuegos.",
  lastUpdated: true,
  head: [["link", { rel: "icon", href: "/assets/img/favicon.ico", type: "image/svg" }]],
  themeConfig: {
    siteTitle: "SiriusX",
    logo: "/assets/img/logo-main.png",
    socialLinks: [{ icon: "github", link: "https://github.com/wipodev" }],
    nav: [
      { text: "Inicio", link: "/" },
      {
        text: "YouTube",
        items: [
          { text: "Shorts", link: "/youtube/shorts" },
          { text: "Videos", link: "/youtube/videos" },
          { text: "Lives", link: "/youtube/lives" },
        ],
      },
      { text: "Comunidad", link: "/community/" },
      { text: "prueba", link: "/prueba/" },
    ],
    footer: {
      message: "Publicado bajo la licencia MIT.",
      copyright: 'Copyright © 2023-presente <a href="https://github.com/wipodev">WipoDev</a>',
    },
  },
};
