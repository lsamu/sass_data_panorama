const requireComponents = import.meta.globEager("./**/index.vue"); // vite

const requireComponentsOption = import.meta.globEager("./**/option.vue"); // vite

const install = function (Vue, opts = {}) {
  let prefix = "BoxEchart";
  for (let fileName in requireComponents) {
    const componentConfig = requireComponents[fileName];
    const component = componentConfig.default || componentConfig;
    let componentName = (
      component["extendOptions"] ? component["extendOptions"] : component
    ).name;
    if (false == componentName.includes(prefix)) {
      componentName = prefix + componentName;
    }
    Vue.component(componentName, component);
  }

  prefix = "BoxEchartOption";
  for (let fileName in requireComponentsOption) {
    const componentConfig = requireComponentsOption[fileName];
    const component = componentConfig.default || componentConfig;
    let componentName = (
      component["extendOptions"] ? component["extendOptions"] : component
    ).name;
    if (false == componentName.includes(prefix)) {
      componentName = prefix + componentName;
    }
    Vue.component(componentName, component);
  }
};

export default {
  install,
};