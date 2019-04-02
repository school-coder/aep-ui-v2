<template>
    <section>
        <title-bar :title="title">
            <template v-slot:actions>
                <button class="btn btn-light"  @click="create">
                    <font-awesome-icon icon="plus-circle"></font-awesome-icon>
                    Create
                </button>
            </template>
        </title-bar>
        <div class="container-fluid">
            <div class="card" style="width: 18rem">
                <img src="images/hack1.png" class="card-img-top" alt="hack1.png" >
                <div class="card-body">
                    <h5 class="card-title">Hack Fest 2019</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div class="card-body">
                    <a href="#" class="card-link">View</a>
                    <a href="#" class="card-link">Register</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import TitleBar from '@/components/core/CTitleBar.vue'
export default {
  components: {
    TitleBar
  },
  methods: {
    create() {
      this.$router.push('/hackathon/create');
    }
  },
  data () {
    return {
      title: 'API Hackathons'
    }
  }
}
</script>
