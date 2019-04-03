<template>
    <section>

      <title-bar :title="title">
          <template v-slot:actions>
              <button class="btn btn-primary"  @click="save">
                      <font-awesome-icon icon="save"></font-awesome-icon>
                      Save
              </button>

              <button class="btn btn-secondary">
                <font-awesome-icon icon="times-circle">  </font-awesome-icon>
                Cancel
              </button>
          </template>
      </title-bar>

      <div class="row container-fluid">
        <div class="col-lg-2">
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link" href @click.prevent="selectedTab='BasicInfo'" :class="{ active: selectedTab == 'BasicInfo'}"> Basic information </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href @click.prevent="selectedTab='Criteria'" :class="{ active: selectedTab == 'Criteria'}"> Criteria </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href @click.prevent="selectedTab='Dates'" :class="{ active: selectedTab == 'Dates'}"> Sceduled Dates </a>
            </li>
          </ul>
        </div>
        <div class="col-lg-10">
          <keep-alive>
            <component :is="selectedTab" :hackathon="hackathon"></component>
          </keep-alive>
        </div>
      </div>

    </section>
</template>

<script>
import TitleBar from '@/components/core/CTitleBar.vue'
import BasicInfo from '@/components/hackathon/create/CHackCreateBasicInfo.vue'
import Criteria from '@/components/hackathon/create/CHackCreateCriteria.vue'
import Dates from '@/components/hackathon/create/CHackCreateDates.vue'
import HackathonService from '@/services/hackathon/HackathonService.js'

export default {
  components: {
    TitleBar,
    BasicInfo,
    Dates,
    Criteria
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
      selectedTab: 'BasicInfo',
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

a.nav-link.active {
  color: #333;
}

button + button {
  margin-left: 10px;
}
</style>
