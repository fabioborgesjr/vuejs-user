<template>
  <div class="column">
    <div class="column is-4 is-offset-4 is-centered has-text-centered">
      <h1 class="title">
        Seja bem vindo. <br />
        Autentifique-se abaixo para ter acesso ao sistema
      </h1>
      <input
        class="input"
        type="email"
        name="email"
        id="email"
        v-model="form.username"
        placeholder="Seu email"
      />
      <input
        class="input"
        type="password"
        name="password"
        id="password"
        v-model="form.password"
        placeholder="Sua senha"
      />
      <div class="notification is-danger" v-if="isError">
        Usuário ou senha inválido(s)
      </div>
      <button class="button is-primary" type="submit" @click="submit(form)">
        Login
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions("login", ["login"]),
    async submit(form) {
      try {
        await this.login(form);
        this.$router.push({ name: "users" });
      } catch {
        this.isError = true;
      }
    }
  },
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      isError: false
    };
  }
};
</script>

<style></style>
