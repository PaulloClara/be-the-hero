module.exports = {
  outputDir: "production/dist",
  pwa: {
    name: "Be The Hero",
    display: "standalone",
    themeColor: "#e02041",
    msTileColor: "#e02041",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "#e02041",
    manifestOptions: {
      start_url: ".",
      short_name: "BTHero",
      description: "Plataforma online para ajudá-lo a se tornar um herói!",
      background_color: "#000000"
    }
  }
};
