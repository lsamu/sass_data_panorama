<template>
  <div>
    <div class="animate-edit-btn-wrapper">
      <box-button-dialog
        :option="{
          icon: 'el-icon-plus',
          style: 'primary',
          text: '添加动画',
          size: 'small',
          dialog: { title: '动画列表'},
        }"
      ></box-button-dialog>
      <box-button-dialog
        :option="{
          icon: 'el-icon-caret-right',
          style: 'primary',
          text: '预览动画',
          size: 'small',
          dialog: { title: '动画列表' },
        }"
      ></box-button-dialog>
    </div>
    <el-collapse accordion>
      <el-collapse-item>
        <template slot="title">
          动画名称
        </template>
        <div class="el-animate-item">
          <box-form :option="optionAnimation"> </box-form>
        </div>
      </el-collapse-item>
    </el-collapse>

    <box-dialog>
      <box-tabs></box-tabs>
    </box-dialog>

    <!-- <div v-for="(item, index) in thatData.animateCssClassName" :key="index">
      {{ item.label }}
      <ul>
        <li v-for="(item2, index2) in item.children" :key="index2">
          {{ item2.label }}::{{ item2.label }}
        </li>
      </ul>
    </div> -->
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "@vue/composition-api";
import animateCssClassName from '../utils/animate'

export default defineComponent({
  setup() {
    const thatData = reactive({
      animateCssClassName,
    });
    const optionAnimation = reactive({
      items: [
        {
          label: "动画时长",
        },
        {
          label: "动画延迟",
        },
        {
          label: "循环次数",
        },
        {
          label: "循环播放",
        },
      ],
    });
    return {
      thatData,
      optionAnimation,
    };
  },
});
</script>
