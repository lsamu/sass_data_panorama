<template>
  <div class="editor-view">
    <div class="topbar-view">
      <Topbar></Topbar>
    </div>
    <div class="toolbar-view" v-show="!project.thatData.preview">
      <Toolbar></Toolbar>
    </div>
    <div class="config-view" v-show="!project.thatData.preview">
      <Config></Config>
    </div>
    <div class="scale-view">
      <ScaleBar></ScaleBar>
    </div>
    <div class="main-view">
      <Canvas :scale="project.thatData.scale" ref="refScreenContainer"></Canvas>
    </div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  onMounted,
  getCurrentInstance,
  computed,
  reactive,
  ref,
  toRef,
  toRefs,
} from "@vue/composition-api";

import Topbar from "./header.vue";
import Toolbar from "./toolbox.vue";
import Config from "./property.vue";
import ScaleBar from "./scaleBar.vue";
import Canvas from "./canvas.vue";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import {useInjector, useProvider,useProviders} from '../utils/hook'
import { useProjectState } from "./state/useProjectState";
import { useHistoryState } from "./state/useHistoryState";

export default defineComponent({
  components: {
    Canvas,
    Topbar,
    Toolbar,
    Config,
    ScaleBar,
  },
  setup() {
    const root = getCurrentInstance();
    const that = root.proxy;

    const thatData = reactive({
      
    });

    useProviders(useProjectState,useHistoryState);

    const project = useInjector(useProjectState);

    const refScreenContainer = function() {
      return (that.$refs["refScreenContainer"] as any).$refs["screen"] as any;
    };

    const saveChartData = async function() {
      const dataURL = await generateScreenShot();
      console.log(dataURL);
      console.log("保存成功");
    };

    const generateData = function(item: any) {};

    const generateScreenShot = async function() {
      const canvas = await html2canvas(refScreenContainer(), {
        backgroundColor: "#142E48",
      });
      let dataURL = canvas.toDataURL("image/png");
      return dataURL;
    };

    //导出图片
    const exportChartSnap = async function() {
      var img = await generateScreenShot();
      var alink = document.createElement("a");
      alink.href = img;
      alink.download = "screen.png";
      alink.click();
    };

    const htmlTemplate = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>Document</title><style>*{ padding:0;margin:0;}#container{overflow:hidden;width:100%;height:0;position:absolute;padding-top:#{containerPaddingTop}#}</style></head>
<body><div id="container">#{containerInnerHtml}#</div></body></html>`;

    const exportH5 = function() {
      const finalHtmlCode = htmlTemplate.replace("#{containerInnerHtml}", "");
      const htmlBolb = new Blob([finalHtmlCode], { type: "text/html" });
      saveAs(htmlBolb, "index.html");
    };

    const exportPDF = function(){
     
    }

    return {
      saveChartData,
      thatData,
      generateData,
      generateScreenShot,
      exportChartSnap,
      exportH5,
      exportPDF,
      project
    };
  },
});
</script>
<style lang="scss" scoped>
.editor-view {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.topbar-view {
  position: absolute;
  height: 60px;
  width: 100vw;
  z-index: 1000;
}
.toolbar-view {
  position: absolute;
  top: 60px;
  width: 50px;
  bottom: 0;
  z-index: 1000;
}
.config-view {
  position: absolute;
  right: 0;
  top: 60px;
  width: 300px;
  bottom: 0;
  z-index: 1000;
}
.scale-view {
  position: absolute;
  right: 316px;
  bottom: 16px;
  z-index: 1000;
  &.preview {
    right: 40px;
  }
}
.main-view {
  background: #eeeeee;
  padding: 60px 300px 0 50px;
  overflow: hidden;
  height: calc(100vh - 60px);
}
</style>
