<template>
  <box-form :option="currentOption" v-model="formData"></box-form>
</template>
<script lang="ts">
import {
  computed,
  defineComponent,
  reactive,
  watch,
  toRefs
} from "@vue/composition-api";

export default defineComponent({
  name: "BoxEchartOptionImage",
  components: {},
  props: ["option", "data", "value"],
  setup(props, context) {
    const thatData = reactive({
      formData: props.value || {},
    });

    const currentOption = reactive({
      items: [
        {
          type: "group",
          items: [
            {
              caption: "图片",
              labelWidth: 50,
              items: [
                {
                  type: "textarea",
                  prop: "url",
                  label: "地址",
                  data: [],
                },
                {
                  type: "upload",
                  prop: "url",
                  label: "上传",
                  data: [],
                },
              ],
            },
          ],
        },
      ],
    });

    // watch(
    //   () => thatData.formData,
    //   (n, o) => {
    //     context.emit("input", n);
    //   }
    // );

    // watch(
    //   () => props.value,
    //   (n, o) => {
    //     thatData.formData = props.value;
    //   }
    // );
    return {
      ...toRefs(thatData),
      currentOption,
    };
  },
});
</script>
