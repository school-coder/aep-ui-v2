<template>
  <section>
    <h2>Register</h2>
    <form>
      <div class="form-group">
        <label for="id-signup-email">Email address</label>
        <input type="email" v-model='user.email' class="form-control" id="id-signup-email" aria-describedby="emailHelp"
               placeholder="Enter email">
      </div>

      <div class="form-group">
        <label for="id-signup-password">Password</label>
        <input type="password" class="form-control" id="id-signup-password" placeholder="Password">
      </div>

      <div class="form-group">
        <label for="id-signup-confirm-password">Confirm Password</label>
        <input type="password" v-model='user.password' class="form-control" id="id-signup-confirm-password"
               placeholder="Password">
      </div>

      <button type="submit" id="id-register-submit" @click.prevent="doRegister" class="btn btn-primary">Submit</button>
    </form>
  </section>
</template>

<script>
import accountService from '@/services/AccountService'

export default {
  data () {
    return {
      user: {
        email: null,
        password: null
      }
    }
  },
  methods: {
    doRegister: function () {
      this.user.login = this.user.email
      accountService.createAccount(this.user).catch(error => console.log(error))
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
