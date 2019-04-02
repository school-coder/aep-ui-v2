<template>
  <section>
      <div class="container-fluid page-title">
        <h3> {{ title }} </h3>
        <div class="float-right">
            <slot name="actions"></slot>
      </div>
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

  .page-title h3 {
      display: inline-block;
  }
</style>
