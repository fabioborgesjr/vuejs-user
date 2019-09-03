<template>
  <div>
    <div class="field">
      <label class="label">Nome</label>
      <div class="control">
        <input
          v-model="form.name"
          class="input"
          :class="{ 'is-danger': $v.form.name.$invalid }"
          type="text"
          placeholder="e.g Alex Smith"
        />
      </div>
      <p v-show="$v.form.name.$invalid" class="help is-danger">Nome inválido</p>
    </div>

    <div class="field">
      <label class="label">paws</label>
      <div class="control">
        <input
          v-model="form.paws"
          class="input"
          :class="{ 'is-danger': $v.form.paws.$invalid }"
          type="number"
          placeholder="e.g. 4"
        />
      </div>
      <p v-show="$v.form.paws.$invalid" class="help is-danger">
        Quantidade de patas inválida
      </p>
    </div>

    <div class="field">
      <label class="label">Tipo</label>
      <div class="control">
        <input
          v-model="form.type"
          class="input"
          :class="{ 'is-danger': $v.form.type.$invalid }"
          type="select"
          placeholder="e.g. Mamifero"
        />
      </div>
      <p v-show="$v.form.type.$invalid" class="help is-danger">
        Tipo do Users inválido
      </p>
    </div>

    <div class="field">
      <label class="label">Data de Nascimento</label>
      <div class="control">
        <input
          v-model="form.date"
          class="input"
          :class="{ 'is-danger': $v.form.date.$invalid }"
          type="date"
          placeholder="01/01/2019"
        />
      </div>
      <p v-show="$v.form.date.$invalid" class="help is-danger">
        Data de nascimento inválida
      </p>
    </div>
    <button
      class="button is-primary"
      @click="submit(form)"
      :disabled="$v.form.$invalid"
    >
      Salvar
    </button>
  </div>
</template>

<script>
import {
  required,
  minLength,
  maxLength,
  between
} from "vuelidate/lib/validators";

import axios from "axios";

const objRequired = { required };
export default {
  data() {
    return {
      form: {
        name: "",
        paws: 0,
        type: "",
        date: new Date("DD-MM-YYYY")
      }
    };
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(100)
      },
      paws: {
        required,
        between: between(0, 100)
      },
      type: objRequired,
      date: objRequired
    }
  },
  methods: {
    async submit(form) {
      if (!this.$v.form.$invalid) {
        form.id = Math.round(Math.random() * 100);

        try {
          await axios.post("http://172.28.8.98:3000/user", form);
        } catch (error) {
          console.log(error);
        }
      }
    }
  }
};
</script>

<style></style>
