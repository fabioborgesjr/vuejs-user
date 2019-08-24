<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="(column, index) in columns" :key="index">{{ column }}</th>
      </tr>
    </thead>
    <tbody>
      <template v-if="$scopedSlots.default">
        <slot v-for="animal in animals" :item="animal"> </slot>
      </template>
      <tr v-else v-for="(animal, index) in animals" :key="index">
        <td v-for="(value, index) in animal" :key="index">{{ value }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    columns: Array,
    animals: Array
  }
};
</script>

<style></style>
