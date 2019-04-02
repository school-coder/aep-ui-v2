<template>
  <section>
    <h2>Login</h2>
    <form>
      <div class="form-group">
        <label for="id-lg-email">Email address</label>
        <input type="text" class="form-control" v-model="email" id="id-lg-email" aria-describedby="emailHelp"
               placeholder="Enter email">
      </div>
      <div class="form-group">
        <label for="id-lg-password">Password</label>
        <input type="password" v-model="password" class="form-control" id="id-lg-password" placeholder="Password">
      </div>

      <div class="form-group">
        <a href="#">Forgot Password</a>
      </div>

      <button type="submit" id="id-login-submit" class="btn btn-primary" @click.prevent="doLogin">Submit</button>
    </form>
  </section>
</template>

<script>
import loginService from '@/services/auth_service/LoginService'
import accountService from '@/services/AccountService'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    doLogin () {
      const data = {
        username: this.email,
        password: this.password
      }
      loginService.logIn(data, this.getCurrentUser)
    },
    getCurrentUser () {
      accountService.getAccount()
    },
    saveUserToStore (response) {
      const userData = response.data;
      this.$store.dispatch('user/login', {
        username: userData.email,
        userId: userData.id
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
    top: calc(50% - 200px);
    left: calc(50% - 250px);
  }

  #id-login-submit {
    text-align: right;
  }
</style>
