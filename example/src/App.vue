<template>
  <div
    class="container"
    v-watermark="'ABC'">
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus" scoped>
.container
  text-align center
  color #2c3e50
  height 300px
  display flex
  flex-direction column
  align-items center
  justify-content space-around
  box-sizing border-box
</style>
