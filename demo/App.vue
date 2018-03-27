<template>
  <div class="animated fadeIn">
    <Loading :size="80" v-show="true"></Loading>
  </div>
</template>

<script>
import Loading from '../src/Loading.vue'
export default {
  name: 'dashboard',
  components: {
    Loading
  }
}
</script>
<style>

</style>
