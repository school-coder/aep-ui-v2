<template>
    <section>
        <title-bar :title="title"></title-bar>
    </section>
</template>

<script>
import TitleBar from '@/components/core/CTitleBar.vue'
export default {
  components: {
    TitleBar
  },
  data () {
    return {
      title: 'Create Hackathon'
    }
  }
}
</script>

<style>

</style>
