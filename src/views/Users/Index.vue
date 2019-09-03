<template>
  <div>
    <Navbar>
      <div class="navbar-end">
        <div class="navbar-item">
          {{ user.name }}
        </div>
      </div>
    </Navbar>
    <div class="container">
      <Bar>
        <button
          v-if="hasPermission('users:write')"
          slot="right"
          class="button is-primary"
          @click="showModal"
        >
          Novo Usuário
        </button>
      </Bar>
      <h1 class="title">Usuários</h1>
      <h2 class="subtitle">Lista de usuários cadastrados</h2>
      <Table class="is-fullwidth" :columns="columns" :users="users">
        <tr slot-scope="row">
          <td>{{ row.item.id }}</td>
          <td>{{ row.item.name }}</td>
          <td>{{ row.item.email }}</td>
          <td
            class="tags has-addons is-marginless"
            v-for="(scope, index) in row.item.scope"
            :key="index"
          >
            <span class="tag">{{ scope.target }}</span>
            <span class="tag is-primary">{{ scope.action }}</span>
          </td>
        </tr>
      </Table>
    </div>

    <Modal
      @close="isOpened = !isOpened"
      :is-opened="isOpened"
      title="Novo Usuário"
    >
      <Form></Form>
    </Modal>
  </div>
</template>

<script>
import Axios from "axios";
import { mapGetters } from "vuex";

import { URL } from "env";

import Table from "@/components/Table";
import Navbar from "@/components/Navbar";
import Bar from "@/components/Bar";
import Modal from "@/components/Modal";

import Form from "./Form";

export default {
  name: "app",
  components: {
    Table,
    Navbar,
    Bar,
    Modal,
    Form
  },
  data() {
    return {
      isOpened: false,
      columns: ["Id", "Nome", "Email", "Permissão"],
      users: [
        ["0", "Girafa", "4", "Mamifero", "12/12/12"],
        ["1", "Urso Polar", "4", "Mamifero", "12/12/12"]
      ]
    };
  },
  methods: {
    showModal() {
      this.isOpened = true;
    },
    hasPermission(value) {
      return this.user.scope.includes(value);
    }
  },
  computed: {
    ...mapGetters("login", ["user"])
  },
  async created() {
    const { data } = await Axios.get(`${URL}/users`);

    this.users = data.map(user => {
      user.scope = user.scope.map(scope => {
        const [target, action] = scope.split(":");
        return {
          target,
          action
        };
      });
      delete user.password;
      return user;
    });
  }
};
</script>

<style lang="scss"></style>
