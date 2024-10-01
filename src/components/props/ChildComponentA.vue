<template>
  <div class="mb-4">
    <h3 class="text-lg font-semibold">Child Component A</h3>
    <p>Name: {{ data.name }}</p>
    <input v-model="newName" placeholder="Update Name" class="border p-2 rounded" />
    <button @click="updateName" class="bg-blue-500 text-white px-4 py-2 rounded mt-2">
      Update Name
    </button>
  </div>
</template>

<script>
export default {
  props: {
    data: Object
  },
  data() {
    return {
      newName: ''
    };
  },
  methods: {
    updateName() {
      this.$emit('update', { name: this.newName });
    }
  }
};
</script>
