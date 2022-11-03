<template>
  <div></div>
</template>
<script lang="ts">
import {
  defineComponent,
  onMounted,
  getCurrentInstance,
  computed,
  reactive,
  ref
} from "@vue/composition-api";

export default defineComponent({
  name: "Drawer",
  props: ["option", "value"],
  setup(props, context) {},
});
</script>
