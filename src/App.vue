<template>
  <div id="app">
     <Header> </Header>
     <router-view></router-view>
     <Footer> </Footer>
  </div>
</template>

<script>

import Header from '@/components/base/Header.vue'
import Footer from '@/components/base/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">

</style>
