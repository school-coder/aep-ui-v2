<template>
    <section >
        <h2>Login</h2>
        <form>
            <div class="form-group">
                <label for="id-lg-email">Email address</label>
                <input type="email" class="form-control" id="id-lg-email" aria-describedby="emailHelp" placeholder="Enter email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="id-lg-password">Password</label>
                <input type="password" class="form-control" id="id-lg-password" placeholder="Password">
            </div>

            <div class="form-group">
                <a href="#">Forgot Password</a>
            </div>

            <button type="submit" id="id-login-submit" class="btn btn-primary">Submit</button>
        </form>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
    section {
        width: 500px;
        margin: auto;
        border: 1px solid #CCC;
        padding: 20px;
        position: relative;
        top: 200px;
    }

    #id-login-submit {
        text-align: right;
    }
</style>
