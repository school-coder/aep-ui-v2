<template>
    <section>
        <title-bar :title="title">
            <template v-slot:actions>
                <button class="btn btn-primary"  @click="create">
                    <font-awesome-icon icon="plus-circle"></font-awesome-icon>
                    Create
                </button>
            </template>
        </title-bar>
        <div class="container-fluid" id="id-hackathon-list-container">
          <div class="row" v-for="(hackathon, index) in hackathons" :key="index">
            <div class="col-md-1">
              <img :src="hackathon.banner" alt="hack png" width="64px" height="64px">
            </div>
            <div class="col-md-1 mg-tp-20">
              <a href="#">{{ hackathon.name }}</a>
            </div>
            <div class="col-md-6">
              {{ hackathon.description }}
            </div>
            <div class="col-md-3"></div>
            <div class="col-md-1 mg-tp-20">
              <a href="#">Register</a>
            </div>
          </div>
        </div>
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
    create () {
      this.$router.push('/hackathon/create')
    }
  },
  data () {
    return {
      title: 'API Hackathons',
      hackathons: [
        {
          'banner': 'images/hack1.png',
          'name': 'Hack Fest 2019',
          'description': 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
        },
        {
          'banner': 'images/hack1.png',
          'name': 'Hack Fest 2019',
          'description': 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
        },
        {
          'banner': 'images/hack1.png',
          'name': 'Hack Fest 2019',
          'description': 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
        }
      ]
    }
  },
  mounted: function () {
    HackathonService.list((response) => {
      this.hackathons = response
    })
  }
}
</script>
<style scoped>
.row {
  border-bottom: 1px solid #CCC;
  padding: 10px;
}
.row > div:last-child {
  text-align: right;
}
.row:nth-child(2n+1) {
  background-color: #FAFAFA;
}
img {
  border-radius: 50%;
  border: 1px solid #DDD;
}
#id-hackathon-list-container {
  margin-top: -20px;
}
.mg-tp-20 {
  margin-top: 20px;
}
</style>
