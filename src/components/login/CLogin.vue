<template>
    <section >
        <h2>Login</h2>
        <form>
            <div class="form-group">
                <label for="id-lg-email">Email address</label>
                <input type="email" class="form-control" v-model="email" id="id-lg-email" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <div class="form-group">
                <label for="id-lg-password">Password</label>
                <input type="password" v-model="password" class="form-control" id="id-lg-password" placeholder="Password">
            </div>

            <div class="form-group">
                <a href="#">Forgot Password</a>
            </div>

            <button type="submit" id="id-login-submit" class="btn btn-primary" @click.prevent="login">Submit</button>
        </form>
    </section>
</template>

<script>

export default {
  data () {
    return {
      email: 'test',
      password: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch('user/login', {
        username: this.email,
        idToken: this.password
      })
    }
  }
}
</script>

<style scoped>
    section {
        width: 500px;
        margin: auto;
        border: 1px solid #CCC;
        padding: 20px;
        position: absolute;
        top: calc(50% - 200px );
        left: calc(50% - 250px );
    }

    #id-login-submit {
        text-align: right;
    }
</style>
