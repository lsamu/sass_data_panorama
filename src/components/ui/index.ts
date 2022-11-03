const requireComponents = import.meta.globEager("./**/index.vue"); // vite
const prefix = "Box";
const install = function (app: any, options: any) {
  for (let fileName in requireComponents) {
    const componentConfig = requireComponents[fileName];
    const component = componentConfig.default || componentConfig;
    let componentName = (
      component["extendOptions"] ? component["extendOptions"] : component
    ).name;
    if (false == componentName.includes(prefix)) {
      componentName = prefix + componentName;
    }
    app.component(componentName, component);
  }
};

export default {
  install,
};
