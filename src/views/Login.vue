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
  color: var(--secondary-color);
}
.login__error {
  color: white;
  background: var(--secondary-color);
  padding: 10px 20px;
  border-radius: 5px;
}
.login_errorCode {
  font-size: 12px;
}
/* TODO: Extract to BaseButton */
.login__button {
  cursor: pointer;
  color: white;
  background: var(--button-primary-bg);
  border-bottom-color: var(--button-primary-border-color);
  border-bottom-width: 3px;
  border-bottom-style: solid;
  border-radius: 5px;
  padding: 5px 15px;
}
.login__button:hover {
  background: var(--button-primary-bg-hover);
}
</style>
