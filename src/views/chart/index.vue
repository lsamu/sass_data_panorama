<template>
  <div>
    <el-row :gutter="36">
      <el-col :span="6">
        <el-card :body-style="{ padding: '0px' }" shadow="hover">
          <div class="add-card" @click="addNewChart">
            <i class="el-icon-circle-plus"></i>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6" v-for="(item, index) in chartList" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="hover">
          <img class="image" :src="item.img" alt="" />
          <div style="padding: 14px">
            <span>{{ item.title }}</span>
            <el-dropdown style="float: right">
              <i class="el-icon-more"></i>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item @click.native="editChart(item._id)"
                    >编辑</el-dropdown-item
                  >
                  <el-dropdown-item @click.native="renameChart(item)"
                    >重命名</el-dropdown-item
                  >
                  <el-dropdown-item @click.native="copyChart(item)"
                    >复制</el-dropdown-item
                  >
                  <el-dropdown-item @click.native="deleteChart(item._id)"
                    >删除</el-dropdown-item
                  >
                  <el-dropdown-item @click.native="viewChart(item._id)" divided
                    >访问</el-dropdown-item
                  >
                  <el-dropdown-item @click.native="openChartAnalyse(item)"
                    >查看统计</el-dropdown-item
                  >
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </el-card>
      </el-col>
    </el-row>
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
  setup() {
    const root = getCurrentInstance();
    const that = root.proxy;

    const formData = reactive({
      chartList: [],
      analyseData: [],
      analyseVisible: false,
    });

    const editChart = function (id: number) {
      that.$router.push({ path: `/editor/${id}` });
    };

    const addNewChart = function () {
      formData.chartList.push({
        _id: 1,
        title: "我是大屏数据",
        img: "#",
      });
    };

    const renameChart = function (row: any) {};

    const copyChart = function (row: any) {};

    const deleteChart = function (row: any) {};

    const viewChart = function (id: number) {
      that.$router.push({ path: `/view/${id}` });
    };

    const openChartAnalyse = function (row: any) {};

    return {
      ...formData,
      editChart,
      addNewChart,
      renameChart,
      copyChart,
      deleteChart,
      viewChart,
      openChartAnalyse,
    };
  },
});
</script>

<style lang="scss" scoped>
.page-header-slot {
  position: fixed;
  top: 56px;
  left: 240px;
  right: 0;
  padding: 0 40px 20px;
  z-index: 8;
  background-color: rgba(255, 255, 255, 0.94);

  .search {
    width: 240px;
    float: right;
  }
}

.el-card {
  margin-bottom: 36px;

  .image {
    width: 100%;
    height: 150px;
    display: block;
    opacity: 0.6;
    transition: opacity 0.3s ease;
  }

  &:hover {
    cursor: pointer;
    .image {
      opacity: 0.8;
    }
  }
}

.el-card .add-card {
  height: 195px;
  line-height: 195px;
  text-align: center;
  font-size: 82px;
  color: rgba(0, 0, 0, 0.08);
}
</style>
