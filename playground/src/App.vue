<template>
  <div class="wrap">
    <el-button type="primary">Primary</el-button>
    <el-icon>
      <Edit />
    </el-icon>
    <MyButton type="danger" disabled>222</MyButton>
  </div>
</template>

<script setup>
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
* {
  padding: 0;
  margin: 0;
}
.wrap{
  width: 100%;
  height: 100vh;
}
</style>
