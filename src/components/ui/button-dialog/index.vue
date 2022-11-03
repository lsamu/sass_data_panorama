<template>
  <div>
    <box-button :option="currentOption"></box-button>
    <box-dialog ref="refDialog" :option="optionDialog"></box-dialog>
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
} from "@vue/composition-api";

export default defineComponent({
  name: "ButtonDialog",
  props: ["option", "data", "value"],
  setup(props, context) {
    const root = getCurrentInstance();
    const that: any = root?.proxy;

    const currentOption = computed(() => {
      let oo = Object.assign({}, props.option || {});
      return oo;
    });

    const optionDialog = computed(() => {
      let oo = Object.assign({}, currentOption.value.dialog || {});
      return oo;
    });

    const refDialog = function () {
      return that.$refs["refDialog"] as any;
    };

    currentOption.value.onClick = function () {
      refDialog().open();
    };

    return {
      currentOption,
      optionDialog,
      refDialog,
    };
  },
});
</script>
<style lang="scss"></style>
