<template>
    <div class="row container-fluid" id="create-basic-info-wrapper">
          <form class="col-lg-6">
              <div class="form-group">
                  <label for="id-hk-name">Banner</label>
                  <input type="url" v-model="hackathon.banner" class="form-control" id="id-hk-banner" aria-describedby="hackathon_banner" >
              </div>
              <div class="form-group">
                  <label for="id-hk-name">Name</label>
                  <input type="text" v-model="hackathon.name" class="form-control" id="id-hk-name" aria-describedby="hackathon_name" >
              </div>
              <div class="form-group">
                  <label for="id-hk-description">Description</label>
                  <textarea @focus="show_preview=true" @blur="show_preview=false" v-model="hackathon.description" name="description" id="id-hk-description" cols="30" rows="10" class="form-control"></textarea>
              </div>
              <button class="float-right btn btn-link" @click.prevent="next"> Next &raquo; </button>
          </form>
          <div v-if="show_preview" class="col-lg-6 preview">
              <div v-html="marked_value"></div>
          </div>
      </div>
</template>

<script>
var marker = require('marked')

export default {
  props: ['hackathon'],
  data () {
    return {
      show_preview: false
    }
  },
  methods: {
    next () {
      this.$emit('next', 'Criteria')
    }
  },
  computed: {
    marked_value () {
      return marker(this.hackathon.description)
    }
  }
}
</script>

<style>

</style>
