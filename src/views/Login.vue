<template>
  <div class="login">
    <h1>Spotify Vue App</h1>
    <hr class="login__divider" />
    <h2 v-if="errorMessage" class="login__error">
      {{ getErrorMessage }}
      <br />
      <span class="login_errorCode">Error code: {{ this.errorMessage }}</span>
    </h2>
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
  props: {
    errorMessage: String
  },
  data: () => {
    return {
      loginURL: auth.getAuthorizationURL()
    };
  },
  computed: {
    getErrorMessage() {
      return "Ops!! Something went wrong...";
    }
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
.login__divider {
  color: green;
}
.login__error {
  color: white;
  background: hotpink;
  padding: 10px 20px;
  border-radius: 5px;
}
.login_errorCode {
  font-size: 12px;
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
