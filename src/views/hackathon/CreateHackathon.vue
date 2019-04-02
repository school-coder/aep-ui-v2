<template>
    <section>
        <title-bar :title="title">
            <template v-slot:actions>
                <button class="btn btn-light"  @click="save">
                        <font-awesome-icon icon="save"></font-awesome-icon>
                        Save
                </button>
            </template>
        </title-bar>

        <div class="row container-fluid" id="create-form-wrapper">
            <form class="col-lg-6">
                <div class="form-group">
                    <label for="id-hk-name">Name</label>
                    <input type="text" v-model="hackathon.name" class="form-control" id="id-hk-name" aria-describedby="hackathon_name" >
                </div>
                 <div class="form-group">
                    <label for="id-hk-name">Banner</label>
                    <input type="url" v-model="hackathon.banner" class="form-control" id="id-hk-banner" aria-describedby="hackathon_banner" >
                </div>
                <div class="form-group">
                    <label for="id-hk-description">Description</label>
                    <textarea @focus="show_preview=true" @blur="show_preview=false" v-model="hackathon.description" name="description" id="id-hk-description" cols="30" rows="10" class="form-control"></textarea>
                </div>
                <div class="form-group">
                    <label for="id-hk-startdate">Registration start date</label>
                    <datepicker input-class="form-control"></datepicker>
                </div>

                <div class="form-group">
                    <label for="id-hk-endate">Registration end date</label>
                    <datepicker input-class="form-control"></datepicker>
                </div>
            </form>
            <div v-if="show_preview" class="col-lg-6 preview">
                <div v-html="marked_value"></div>
            </div>
        </div>

    </section>
</template>

<script>
import TitleBar from '@/components/core/CTitleBar.vue'
import HackathonService from '@/services/hackathon/HackathonService.js'
import Datepicker from 'vuejs-datepicker'

var marker = require('marked')

export default {
  components: {
    TitleBar,
    Datepicker
  },
  computed: {
    marked_value () {
      return marker(this.hackathon.description)
    }
  },
  methods: {
    save () {
      HackathonService.create(this.hackathon, () => {
        window.alert('callback invoked')
      })
    }
  },
  data () {
    return {
      title: 'Create Hackathon',
      show_preview: false,
      hackathon: {
        name: '',
        description: ''
      }
    }
  }
}
</script>

<style scoped>
#create-form-wrapper {
    height: calc( 100% - 100px );
}

.preview {
    background-color: #fafafa;
    border-left: 1px solid #DDD
}
</style>
