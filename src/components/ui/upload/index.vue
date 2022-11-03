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
  ref,
  watch
} from "@vue/composition-api";

export default defineComponent({
  name: "Upload",
  props: ["option", "value"],
  setup(props, context) {},
});
</script>
