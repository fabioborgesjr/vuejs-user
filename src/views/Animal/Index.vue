<template>
  <div>
    <Navbar></Navbar>
    <div class="container">
      <Bar>
        <button slot="right" class="button is-primary" @click="showModal">
          Novo animal
        </button>
      </Bar>
      <h1 class="title">Animais que desistiram da Amazônia</h1>
      <h2 class="subtitle">Lista de desertores do deserto Amazônico</h2>
      <Table class="is-fullwidth" :columns="columns" :animals="animals">
      </Table>
    </div>

    <Modal
      @close="isOpened = !isOpened"
      :is-opened="isOpened"
      title="Novo animal"
    >
      <Form></Form>
    </Modal>
  </div>
</template>

<script>
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
      columns: ["Id", "Nome", "paws", "Tipo", "Nasc"],
      animals: [
        ["0", "Girafa", "4", "Mamifero", "12/12/12"],
        ["1", "Urso Polar", "4", "Mamifero", "12/12/12"]
      ]
    };
  },
  methods: {
    showModal() {
      this.isOpened = true;
    }
  }
};
</script>

<style lang="scss"></style>
