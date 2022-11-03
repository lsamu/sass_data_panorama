<template>
  <div class="box-form">
    <h3 v-if="currentOption.title">{{ currentOption.title }}</h3>
    <el-form
      ref="form"
      :label-width="currentOption.labelWidth + 'px'"
      :rules="currentRules"
      :model="formData"
    >
      <el-row :gutter="currentOption.gutter">
        <el-col
          :span="getSpan(item.span)"
          v-for="(item, index) in currentItems"
          :key="index"
          :ref="'ref-col-' + item.prop"
        >
          <el-form-item :label="getLabel(item.label)" :prop="item.prop">
            <component
              :is="getComponent(item.type)"
              v-model="formData[item.prop]"
              :ref="'ref-item-' + item.prop"
              :option="item"
              :data="item.data"
            >
            </component>
          </el-form-item>
        </el-col>
        <el-col
          :span="getSpan(24)"
          :style="'text-align:' + currentOption.footer.location"
          v-if="currentOption.footer.visable"
        >
          <el-button type="primary" @click="onSubmit" icon="el-icon-check"
            >提交</el-button
          >
          <el-button @click="onReset" icon="el-icon-delete">重置</el-button>
        </el-col>
      </el-row>
    </el-form>
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
  name: "Form",
  props: {
    option: Object,
    value: Object,
  },
  setup(props, context) {
    const root = getCurrentInstance();
    const that: any = root?.proxy;
    const formData = reactive(props.value || {});

    const currentOption = computed(() => {
      const defaultOption = {
        title:"",
        labelWidth: 100,
        gutter: 0,
        inline: false,
        items: [],
        footer: {
          visable: false,
          location: "center",
          buttons: [],
        },
      };
      let oo = Object.assign(defaultOption, props.option || {});
      return oo;
    });

    const currentItems = computed(() => {
      return currentOption.value.items as any;
    });

    const currentRules = computed(() => {
      const defaultRule = {};
      let rules: any = {};
      for (const item of currentOption.value.items as any) {
        if (item.rules != undefined) {
          rules[item.prop] = item.rules;
        }
      }
      return rules;
    });

    const onSubmit = function () {
      refForm()["validate"](async (valid: boolean) => {
        if (valid) {
          context.emit("onSubmit", formData);
          if (currentOption.value.onSubmit != null) {
            currentOption.value.onSubmit(formData);
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    };

    const onReset = function () {
      refForm().resetFields();
    };

    const getSpan = function (defaultSpan: number) {
      if (currentOption.value.inline) {
        return 6;
      }
      return defaultSpan;
    };

    const getLabel = function (label: string) {
      return label + ":";
    };

    const getComponent = function (type: string) {
      if (type == "textarea") {
        type = "input";
      }
      return "box-" + type;
    };

    const refForm = function () {
      return that.$refs["form"] as any;
    };

    const refItem = function (prop: string) {
      return that.$refs["ref-item-" + prop] as any;
    };

    const refCol = function (prop: string) {
      return that.$refs["ref-col-" + prop] as any;
    };

    return {
      currentOption,
      currentItems,
      formData,
      currentRules,
      onSubmit,
      onReset,
      getSpan,
      getLabel,
      getComponent,
      refForm,
      refItem,
      refCol,
    };
  },
});
</script>
