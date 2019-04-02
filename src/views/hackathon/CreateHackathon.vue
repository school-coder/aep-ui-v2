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

        <form class="col-lg-6">
            <div class="form-group">
                <label for="id-hk-name">Name</label>
                <input type="text" v-model="hackathon.name" class="form-control" id="id-hk-name" aria-describedby="hackathon_name" >
            </div>
            <div class="form-group">
                <label for="id-hk-description">Description</label>
                <textarea v-model="hackathon.description" name="description" id="id-hk-description" cols="30" rows="10" class="form-control"></textarea>
            </div>
        </form>
    </section>
</template>

<script>
import TitleBar from '@/components/core/CTitleBar.vue'
import HackathonService from '@/services/hackathon/HackathonService.js'

export default {
  components: {
    TitleBar
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
      hackathon: {
        name: '',
        description: ''
      }
    }
  }
}
</script>

<style>

</style>
