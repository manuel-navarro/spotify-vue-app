<template>
  <div class="login">
    <h1>Spotify Vue App</h1>
    <p>Please log in with Spotify to use this app</p>
    <a :href="loginURL" rel="noopener noreferrer" class="login__button"
      >Login with Spotify</a
    >
  </div>
</template>

<script>
import auth from "@/api/auth";

export default {
  name: "login",
  components: {},
  data: () => {
    return {
      loginURL: auth.getAuthorizationURL()
    };
  }
};
</script>
<style scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.login__button {
  cursor: pointer;
  color: white;
  background: green;
  border-bottom-color: #016a01;
  border-bottom-width: 3px;
  border-bottom-style: solid;
  border-radius: 5px;
  padding: 5px 15px;
}
.login__button:hover {
  background: #42b983;
}
</style>
