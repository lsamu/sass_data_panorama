<template>
  <div class="box-echart-layout">
    <el-row :span="24">
      <el-col
        :span="getSpan(item.span)"
        v-for="(item, index) in currentItems"
        :key="index"
        :ref="'ref-col-' + item.prop"
      >
        <div
          style="
            border: 1px solid #ccc;
            padding: 25px;
            margin: 5px;
            border-radius: 4px;
          "
        >
          <component
            :is="getComponent(item.type)"
            :ref="'ref-item-' + item.prop"
            :option="item"
            :data="item.data"
            style="width: 100%"
          >
          </component>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "@vue/composition-api";
import Enumerable from "linq";
import merge from 'deepmerge';

export default defineComponent({
  name: "Layout",
  components: {},
  props: ["option", "data", "value"],
  setup(props, context) {
    const currentOption = computed(() => {
      const defaultOption = {
        items: [],
      };
      let oo = Object.assign(defaultOption, props.option || {});
      return oo;
    });

    const currentData = computed(() => {
      let oo = {};
      return oo;
    });

    const currentItems = computed(() => {
      const defaultItems = [];
      let oo = Object.assign(defaultItems, currentOption.value.items || []);
      let aa = [];
      oo = Enumerable.from(oo).forEach((p: any) => {
        const defaultItem = {
          span: 24,
        };
        aa.push(Object.assign(defaultItem, p || {}));
      });
      return aa;
    });

    const getComponent = function (type): string {
      return "box-" + type;
    };

    const getSpan = function (defaultSpan) {
      if (defaultSpan == null) {
        return 24;
      }
      return defaultSpan;
    };

    const searchForm = function (search) {
      let oo = Object.assign([], search || []);
      return {
        hasFooter: false,
        inline: true,
        labelWidth: 0,
        gutter: 10,
        items: oo,
      };
    };

    const getTitleDesc = function (item) {
      if (item.title || item.desc || item.search) {
        return true;
      }
      return false;
    };
    return {
      currentOption,
      currentData,
      currentItems,
      getComponent,
      getSpan,
      searchForm,
      getTitleDesc,
    };
  },
});
</script>
