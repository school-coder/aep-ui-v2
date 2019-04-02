<template>
  <section>
      <div class="container-fluid page-title">
        <h3> {{ title }} </h3>
      </div>
  </section>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style scoped>
  section {
      border-bottom: 2px solid #EEE;
      margin-bottom: 20px;
  }
</style>
