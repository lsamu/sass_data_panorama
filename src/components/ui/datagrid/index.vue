<template>
  <div class="box-datagrid">
    <div class="box-datagrid__search"></div>
    <div class="box-datagrid__toolbar"></div>
    <div class="box-datagrid__table">
      <el-table :data="currentData" border stripe style="width: 100%">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </el-table>
    </div>
    <div class="box-datagrid__page">
      <el-pagination
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      >
      </el-pagination>
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
  ref
} from "@vue/composition-api";

export default defineComponent({
  name: "Datagrid",
  props: ["option", "data", "value"],
  setup(props, context) {
    let currentOption = computed(() => {
      const defaultOption = {
        columns: [],
        data: [
          {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄",
          },
          {
            date: "2016-05-04",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1517 弄",
          },
          {
            date: "2016-05-01",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1519 弄",
          },
          {
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1516 弄",
          },
        ],
      };
      let oo = Object.assign(defaultOption, props.option || {});
      return oo;
    });

    let currentColumns = computed(() => {
      let oo = Object.assign([], currentOption.value.columns || {});
      return oo;
    });

    let currentData = computed(() => {
      let oo = Object.assign([], currentOption.value.data || []);
      return oo;
    });

    return {
      currentOption,
      currentData,
      currentColumns,
    };
  },
});
</script>
