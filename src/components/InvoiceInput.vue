<template>
  <div class="input flex flex-column">
    <label for="{{for}}">{{ label }}</label>
    <input type="text" required id="{{id}}" v-model="{{vmodel}}" />
  </div>
</template>

<script>
export default {
  name: "invoiceInput",
  props: ["for", "id", "vmodel", "label"],
};
</script>

<style>
</style>