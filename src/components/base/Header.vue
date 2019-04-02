<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" to="/">Engagement Platform</router-link>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbar-supported-content">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link class="nav-link" to="/hackathon" active-class="active">API Hackthon</router-link>
                </li>
            </ul>

            <ul class="navbar-nav" >
                <li class="nav-item" v-if="!isAuthenticated">
                    <router-link class="nav-link" to="/register" active-class="active">Register</router-link>
                </li>

                <li class="nav-item" v-if="!isAuthenticated">
                    <router-link class="nav-link" to="/login" active-class="active">Login</router-link>
                </li>

                <div class="dropdown" v-if="isAuthenticated">
                  <a class="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    My Account
                  </a>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item"  href="#" @click.prevent="logout">Logout</a>
                  </div>
                </div>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('user/logout')
    }
  },
  computed: {
    isAuthenticated () {
      return this.$store.getters['user/isAuthenticated']
    }
  }
}
</script>

<style>

</style>
