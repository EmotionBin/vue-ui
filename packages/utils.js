export const withInstall = (main, extra) => {
  main.install = (app) => {
    for (const comp of [main, ...Object.values(extra ?? {})]) {
      app.component(comp.name, comp);
    }
  };
  if (extra) {
    for (const [compName, comp] of Object.entries(extra)) {
      main[compName] = comp;
    }
  }
  return main;
};
