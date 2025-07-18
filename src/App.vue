<template>
  <div class="app-container">
    <div class="center-content">
      <Welcome />
    </div>
    <footer class="footer">
      浙ICP备2025184908号
    </footer>
  </div>
</template>

<script>
// App.vue: 主组件，管理页面整体布局和组件引入
import Welcome from './components/Welcome.vue';

export default {
  name: 'App',
  components: {
    Welcome
  }
};
</script>

<style>
/* 全局样式：确保页面简洁响应式 */
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* 占满视口高度 */
  justify-content: space-between; /* 内容在上，footer在下 */
  align-items: center;
  background-color: #f0f0f0; /* 页面背景 */
}

.center-content {
  background-color: white;
  padding: 20px;
  margin: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 80%; /* 响应式宽度 */
}

.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 10px;
  background-color: #f0f0f0;
  font-size: 14px;
  color: #666;
}
</style> 