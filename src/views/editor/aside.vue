<template>
  <div class="panel">
    <div class="title" v-if="panelKey === 'layers'">
      <span>图层 ({{ project.thatData.currentPage.elements.length }})</span>
    </div>
    <div class="title" v-else-if="panelKey === 'pages'">
      <span>页面 ({{ project.thatData.chartData.pages.length }})</span>
    </div>
    <div class="title" v-else-if="panelKey !== ''">
      <span>
        {{ componentList[panelKey].name }} ({{
          componentList[panelKey].children.length
        }})
      </span>
    </div>

    <div class="layer-list" v-if="panelKey === 'layers'">
      <div
        class="list-item"
        v-for="(item, index) in project.thatData.currentPage.elements"
        :key="index"
        @click="setActiveComponentByIndex(index)"
        :class="{ active: index === project.thatData.currentElementIndex }"
      >
        <div class="name">{{ item.name }}</div>
        <i
          class="el-icon-delete icon"
          @click="handleDeleteComponent(index)"
        ></i>
      </div>
    </div>
    <div class="layer-list" v-else-if="panelKey === 'pages'">
      <el-button @click="handleAddPage">添加页面</el-button>
      <div
        class="list-item"
        v-for="(item, index) in project.thatData.chartData.pages"
        :key="index"
        @click="setActivePageByIndex(index)"
        :class="{ active: index === project.thatData.currentPageIndex }"
      >
        <div class="name">{{ item.title }}</div>
        <i
          class="el-icon-delete icon"
          @click="handleDeletePage(index)"
          title="删除"
        ></i>

        <i
          class="el-icon-document-copy icon"
          @click="handleClonePage(index)"
          title="复制"
        ></i>
      </div>
    </div>
    <div class="component-list" v-else-if="panelKey !== ''">
      <div
        class="list-item"
        v-for="(item, index) in componentList[panelKey].children"
        :key="index"
        @click="handleAddComponent(item)"
      >
        <div class="img-wrapper">
          <img :src="item.img" alt="" />
        </div>
        <div class="name">{{ item.name }}</div>
      </div>
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
  toRefs,
} from "@vue/composition-api";
import uuid from "node-uuid";

import cc from "../utils/component";

import { useInjector, useProvider } from "../utils/hook";
import { useProjectState } from "./state/useProjectState";

const thatData = reactive(cc);

export default defineComponent({
  props: ["panelKey"],
  setup() {
    const root = getCurrentInstance();
    const that: any = root.proxy;

    const project = useInjector(useProjectState);

    const handleAddComponent = function(item: any) {
      const component = {
        uuid: uuid.v4(),
        name: item.name + (project.thatData.currentPage.elements.length + 1),
        x: 0,
        y: 0,
        w: project.thatData.currentPage.width,
        h: 200,
        z: project.thatData.currentPage.elements.length,
        bgcolor: "rgba(0, 0, 0, 0)",
        bgImage: "#",
        active: false,
        type: item.id,
        data: {},
        animation: {
          items: [],
        },
      };
      project.addComponent(component);
    };

    const handleDeleteComponent = function(index: any) {
      project.deleteComponent(index);
    };

    const setActiveComponentByIndex = function(index: any) {
      project.setActiveComponentByIndex(index);
    };

    const handleAddPage = function() {
      project.addPage();
    };

    const handleClonePage = function(index: any) {
      project.clonePage(index);
    };

    const handleDeletePage = function(index: any) {
      project.delPage(index);
    };

    const setActivePageByIndex = function(index: any) {
      project.setActivePage(index);
    };

    return {
      ...toRefs(thatData),
      handleAddComponent,
      handleDeleteComponent,
      setActiveComponentByIndex,
      handleAddPage,
      handleClonePage,
      handleDeletePage,
      setActivePageByIndex,
      project,
    };
  },
});
</script>

<style lang="scss" scoped>
.panel {
  height: 100%;
  width: 250px;
  display: flex;
  flex-direction: column;
  background: #ffffffe9;
  box-shadow: 4px 0 4px #00000005;
}
.title {
  color: #999999;
  padding: 10px 16px 16px;
}
.component-list {
  flex: 1;
  padding: 0 10px 0 16px;
  overflow: scroll;

  .list-item {
    display: inline-block;
    width: 90px;
    background: rgba(64, 160, 255, 0.06);
    border: 1px solid rgba(64, 160, 255, 0.1);
    margin-right: 10px;
    margin-bottom: 12px;
    opacity: 0.6;
    transition: opacity, background 0.3s ease;
    text-align: center;
    padding: 5px 0;

    &:hover {
      cursor: pointer;
      opacity: 0.8;
      background: rgba(64, 160, 255, 0.1);
      border: 1px solid #409eff;
      .name {
        color: #666666;
      }
    }

    .img-wrapper {
      display: flex;
      width: 100%;
      height: 80px;
      align-items: center;
      justify-content: center;
      img {
        height: 54px;
      }
    }

    .name {
      height: 20px;
      line-height: 20px;
      font-size: 13px;
      color: #777777;
    }
  }
}

.flip-list-move {
  transition: transform 0.5s;
}

.ghost {
  opacity: 0.3;
  background: #c8ebfb;
}

.layer-list {
  flex: 1;
  padding: 0;
  overflow: scroll;

  .list-item {
    display: flex;
    align-items: center;
    height: 48px;
    width: 100%;
    transition: background 0.3s ease;
    border-top: 1px solid rgba(0, 0, 0, 0.03);
    border-bottom: 1px solid rgba(0, 0, 0, 0.03);
    border-right: 6px solid transparent;
    margin-bottom: -1px;
    padding: 0 16px;
    box-sizing: border-box;

    &.active {
      background: rgba(64, 160, 255, 0.06);
      border-right: 6px solid #409eff7d;
    }

    &:hover {
      opacity: 1;
      background: rgba(64, 160, 255, 0.06);

      .icon {
        opacity: 1;
      }
    }

    .name {
      flex: 1;
      color: #777777;
    }

    .icon {
      float: right;
      color: #999999;
      font-size: 14px;
      opacity: 0;
      transition: opacity 0.3s ease;

      &:hover {
        color: #409eff;
        cursor: pointer;
      }
    }
  }
}
</style>
