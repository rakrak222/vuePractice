<template>
  <div>
    <h3 class="text-lg font-semibold">Child Component B</h3>
    <p>Age: {{ info.age }}</p>
    <input v-model="newAge" type="number" placeholder="Update Age" class="border p-2 rounded" />
    <button @click="notifyParent" class="bg-green-500 text-white px-4 py-2 rounded mt-2">
      Notify Parent
    </button>
  </div>
</template>

<script>
export default {
  props: {
    info: Object
  },
  data() {
    return {
      newAge: ''
    };
  },
  methods: {
    notifyParent() {
      this.$emit('notify', { age: this.newAge });
    }
  }
};
</script>
