<template>
  <div class="box-echart-datetime">
    <p :style="styleName">{{ nowDate }}</p>
  </div>
</template>
<script lang="ts">
import {
  computed,
  defineComponent,
  reactive,
  toRefs,
} from "@vue/composition-api";
import dayjs from "dayjs";
import merge from 'deepmerge';

export default defineComponent({
  name: "Datetime",
  components: {},
  props: ["option", "data", "value"],
  setup(props, context) {
    const thatData = reactive({
      date: new Date(),
    });

    const getDayText = (date = new Date()) => {
      if (typeof date === "number") {
        date = new Date(date);
      } else if (typeof date === "string") {
        date = new Date(date.replace(/-/g, "/").replace(/\./g, "/"));
      }
      return "日一二三四五六".charAt(date.getDay());
    };

    const setPx = (val, defval = "") => {
      val = val + "";
      if (val.indexOf("%") === -1) {
        val = val + "px";
      }
      return val;
    };

    const nowDate = computed(() => {
      if (props.option?.format === "day") {
        return "星期" + getDayText();
      }
      const format = (props.option?.format || "yyyy-MM-dd hh:mm:ss")
        .replace("dd", "DD")
        .replace("yyyy", "YYYY");
      return dayjs(thatData.date).format(format);
    });

    const styleName = computed(() => {
      return {
        width: "100%",
        height: "100%",
        textAlign: props.option?.textAlign,
        letterSpacing: setPx(props.option?.split),
        textIndent: setPx(props.option?.split),
        backgroundColor: props.option?.backgroundColor,
        fontWeight: props.option?.fontWeight || "normal",
        fontSize: (props.option?.fontSize || 30) + "px",
        color: props.option?.color || "#333",
      };
    });

    setInterval(() => {
      thatData.date = new Date();
    }, 1000);

    return {
      ...toRefs(thatData),
      styleName,
      nowDate,
    };
  },
});
</script>
<style lang="scss">
  .box-echart-datetime{
    width:100%;
    height:100%;
  }
</style>
