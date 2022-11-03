<template>
  <div class="screen">
    <div class="logo">vvv</div>
    <div class="desc">一站式数据大屏制作平台</div>
    <transition> </transition>
    <div class="btn-wrapper">
      <span class="btn" @click="handleClick">进入系统</span>
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
  ref,
} from "@vue/composition-api";

export default defineComponent({
  components: { },
  setup() {
    const root = getCurrentInstance();
    const that = root.proxy;
    const handleClick = function () {
      that.$router.push({ path: "console" });
    };

    return {
      handleClick,
    };
  },
});
</script>

<style lang="scss" scoped>
.screen {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: url("../../assets/img/bg.png");
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
}
.logo {
  height: 72px;
  line-height: 72px;
  text-align: center;
  font-weight: bold;
  font-size: 36px;
  color: #515151;
  margin-top: 180px;

  &::after {
    content: ".";
    font-size: 42px;
    color: rgba(255, 0, 0, 0.6);
  }
}
.desc {
  text-align: center;
  font-size: 16px;
  font-weight: 300;
  font-family: "Noto Sans SC", sans-serif;
  letter-spacing: 4px;
  color: #808080;
  margin: 0 0 40px;
}

.login-box {
  background: #ffffff;
  width: 240px;
  margin: 20px auto 40px;
  padding: 0 40px 36px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.06);
  .radio-group {
    text-align: center;
    .radio-btn {
      display: inline-block;
      padding: 10px 20px;
      margin: 10px 10px;
      color: #999999;
      &.active {
        color: #212121;
        border-bottom: 2px solid #212121;
      }
    }
  }
}

.btn-wrapper {
  margin-top: 40px;
  text-align: center;
  a {
    text-decoration: none;
    color: #ffffff;
  }
  .btn {
    padding: 12px 32px;
    background: rgba(0, 0, 0, 0.5);
    color: #ffffff;
    transition: background 0.3s ease;
    font-size: 14px;
    border-radius: 50px;
    &:hover {
      background: #409eff;
      cursor: pointer;
    }
  }
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
