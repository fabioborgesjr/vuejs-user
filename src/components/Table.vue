<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="(column, index) in columns" :key="index">{{ column }}</th>
      </tr>
    </thead>
    <tbody>
      <template v-if="$scopedSlots.default">
        <slot v-for="user in users" :item="user"> </slot>
      </template>
      <tr v-else v-for="(user, index) in users" :key="index">
        <td v-for="(value, index) in user" :key="index">{{ value }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    columns: Array,
    users: Array
  }
};
</script>

<style></style>
