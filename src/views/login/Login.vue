<template>
    <section >
        <h1>Login</h1>
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
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
