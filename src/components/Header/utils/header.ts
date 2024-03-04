export const toggleTheme = (isDark: boolean) => {
  // document.body.classList.toggle("calcite-mode-dark");
  //document.querySelector('.esri-ui')?.classList.toggle("calcite-mode-dark");
  //document.querySelector('.esri-ui')?.classList.toggle("calcite-mode-light");
  if (isDark) {
    document.body.classList.add("calcite-mode-dark");
    document.querySelector(".esri-ui")?.classList.remove("calcite-mode-light");
    document.querySelector(".esri-ui")?.classList.add("calcite-mode-dark");
  } else {
    document.body.classList.remove("calcite-mode-dark");
    document.querySelector(".esri-ui")?.classList.add("calcite-mode-light");
    document.querySelector(".esri-ui")?.classList.remove("calcite-mode-dark");
  }

  // ArcGIS JSAPI theme
  const dark: HTMLLinkElement = document.querySelector(
    "#jsapi-theme-dark"
  ) as HTMLLinkElement;
  const light: HTMLLinkElement = document.querySelector(
    "#jsapi-theme-light"
  ) as HTMLLinkElement;
  if (dark && light) {
    dark.disabled = !isDark;
    light.disabled = isDark;
  }

  return document.body.classList.contains("calcite-mode-dark");
}

export const reopenDropdown = (e: any) => {
  requestAnimationFrame(() => {
    if (e.target.closest('calcite-dropdown')) {
      e.target.closest('calcite-dropdown').open = true;
    }
  });
}