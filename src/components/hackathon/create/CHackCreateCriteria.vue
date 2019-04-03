<template>
    <section>
        <div class="row container-fluid" id="create-basic-info-wrapper">
          <form class="col-lg-6">
              <div class="form-group">
                  <label for="id-hk-requirements">Requirements</label>
                  <textarea @focus="marked_down_input=hackathon.requirements" @input="marked_down_input=hackathon.requirements" v-model="hackathon.requirements" name="requirements" id="id-hk-requirements" cols="30" rows="7" class="form-control"></textarea>
              </div>

              <div class="form-group">
                  <label for="id-hk-eligibility">Eligibility</label>
                  <textarea @focus="marked_down_input=hackathon.eligibility" @input="marked_down_input=hackathon.eligibility" v-model="hackathon.eligibility" name="eligibility" id="id-hk-eligibility" cols="30" rows="7" class="form-control"></textarea>
              </div>

              <div class="form-group">
                  <label for="id-hk-judges">Judges</label>
                  <textarea @focus="marked_down_input=hackathon.judges" @input="marked_down_input=hackathon.judges" v-model="hackathon.judges" name="judges" id="id-hk-judges" cols="30" rows="7" class="form-control"></textarea>
              </div>

              <div class="form-group">
                  <label for="id-hk-judgingCriteria">Judging Criteria</label>
                  <textarea @focus="marked_down_input=hackathon.judgingCriteria" @input="marked_down_input=hackathon.judgingCriteria" v-model="hackathon.judgingCriteria" name="judgingCriteria" id="id-hk-eligibility" cols="30" rows="7" class="form-control"></textarea>
              </div>

              <button class="float-right btn btn-link" @click.prevent="next"> Next &raquo; </button>
          </form>
          <div class="col-lg-6 preview">
              <div v-html="marked_value"></div>
          </div>
      </div>
    </section>
</template>

<script>

var marker = require('marked')

export default {
  props: ['hackathon'],
  data () {
    return {
      marked_down_input: ''
    }
  },
  methods: {
    next () {
      this.$emit('next', 'Dates')
    }
  },
  computed: {
    marked_value () {
      if (this.marked_down_input !== null && this.marked_down_input !== undefined) {
        return marker(this.marked_down_input)
      }
      return ''
    }
  }
}
</script>

<style>
.preview {
  background-color: #fafafa;
  border-left: 1px solid #DDD;
}
</style>
