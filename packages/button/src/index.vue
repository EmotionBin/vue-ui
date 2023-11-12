<template>
  <el-button class="my-button" v-bind="$attrs">
    <slot />
  </el-button>
</template>

<script setup>

const COMPONENT_NAME = 'MyButton'
defineOptions({
  name: COMPONENT_NAME,
})

</script>

<style lang="scss" scoped>
  .my-button{
    height: 50px;
  }
</style>
