<template>
  <div id="app">
     <Header> </Header>
     <div id="content">
      <router-view></router-view>
     </div>
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
  body {
    font-family: 'Roboto', sans-serif !important;
    color: #333;
  }

  #content {
    padding-top: 0.5rem;
  }
</style>
