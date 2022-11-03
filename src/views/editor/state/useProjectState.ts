import { computed, reactive, toRefs, toRef } from "@vue/composition-api";
import uuid from "node-uuid";
import merge from "deepmerge";

import { useInjector, useProvider } from "../../utils/hook";
import { useHistoryState } from "./useHistoryState";

export interface page {
  uuid?: string;
  title?: string;
  bgcolor?: string;
  bgimage?: string;
  bgimagesize?: string;
  width?: number;
  height?: number;
  elements?: any[];
  bgSize?: string;
  mode?: string;
}

export function useProjectState() {
  //const history = useInjector(useHistoryState);

  const currentPage = computed(() => {
    let aa: page = {};
    if (thatData.currentPageIndex >= 0) {
      aa = thatData.chartData.pages[thatData.currentPageIndex];
    }
    return aa;
  });

  const currentElement = computed(() => {
    let aa: {} = {};
    if (thatData.currentElementIndex >= 0) {
      aa =
        thatData.chartData.pages[thatData.currentPageIndex].elements[
          thatData.currentElementIndex
        ];
    }
    return aa;
  });

  const thatData = reactive({
    scale: 1,
    preview: false,
    chartData: {
      uuid: uuid.v4(),
      title: "xxx项目",
      desc: "我用XX可视化编辑器做了一个超酷炫的H5",
      coverImage: "", //封面
      auther: "作者",
      pages: [
        {
          uuid: uuid.v4(),
          title: "页面1",
          bgcolor: "",
          bgimage: "",
          bgimagesize: "",
          width: 1000,
          height: 770,
          mode: "design", //页面模式  drag design grid
          bgSize: "xs", //页面大小
          elements: [],
        },
      ], //页面
      prefabs: [], //预制件   box-prefab
      plugins: [], //远程插件 umd地址
    },
    currentPageIndex: 0,
    currentElementIndex: -1,
    currentPage,
    currentElement,
  });

  /*
  xs: "490",
        sm: "576",
        md: "768",
        lg: "992",
        xl: "1200",
  */

  const addComponent = function(data: any) {
    thatData.currentPage.elements.unshift(data);
  };

  const deleteComponent = function(index: any) {
    thatData.currentPage.elements.splice(index, 1);
  };

  const clearComponent = function() {
    thatData.currentPage.elements = [];
  };

  const changeScale = function(scale: any) {
    thatData.scale = scale;
  };

  const setActiveComponentByIndex = function(index: any) {
    for (let i = 0; i < thatData.currentPage.elements.length; i += 1) {
      const element: any = thatData.currentPage.elements[i];
      if (index === i) {
        element.active = true;
      } else {
        element.active = false;
      }
    }
    thatData.currentElementIndex = index;
  };

  //添加页面
  const addPage = function() {
    let page = {
      uuid: uuid.v4(),
      title: "页面" + (thatData.chartData.pages.length + 1),
      bgcolor: "",
      bgimage: "",
      bgimagesize: "",
      width: 1000,
      height: 800,
      mode: "design",
      elements: [],
      bgSize: "xs",
    };
    thatData.chartData.pages.unshift(page);
  };

  //复制页面
  const clonePage = function(index: any) {
    for (let i = 0; i < thatData.chartData.pages.length; i += 1) {
      const page = merge({}, thatData.chartData.pages[i]);
      if (i == index) {
        page.uuid = uuid.v4();
        page.title = page.title + "-复制";
        thatData.chartData.pages.unshift(page);
      }
    }
  };

  //删除页面
  const delPage = function(index: any) {
    if (thatData.chartData.pages.length <= 1) {
      return;
    }
    thatData.chartData.pages.splice(index, 1);
    thatData.currentPageIndex = index - 1;
  };

  //选中页面
  const setActivePage = function(index: any) {
    for (let i = 0; i < thatData.chartData.pages.length; i += 1) {
      const page = thatData.chartData.pages[i];
      if (i == index) {
        thatData.currentPageIndex = index;
      }
    }
    thatData.currentElementIndex = -1;
  };

  //重做
  const redo = function() {
    //不加入历史记录
    //thatData.currentPage = history.getNext();
  };

  //撤销
  const undo = function() {
    //不加入历史记录
    //thatData.currentPage = history.getPrev();
  };

  //导出项目数据
  const exportProjectData = function() {
    return thatData.chartData;
  };

  //导入项目数据
  const importProjectData = function(data: any) {
    thatData.chartData = data;
  };

  return {
    thatData,
    addComponent,
    deleteComponent,
    clearComponent,
    changeScale,
    setActiveComponentByIndex,
    addPage,
    clonePage,
    delPage,
    setActivePage,
    exportProjectData,
    importProjectData,
    redo,
    undo,
  };
}
