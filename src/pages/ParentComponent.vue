<template>
  <div class="p-4">
    <h2 class="text-xl font-bold mb-4">Parent Component</h2>
    <!-- Child components rendering and passing props -->
    <ChildComponentA :data="parentData" @update="handleUpdateA" />
    <ChildComponentB :info="parentData" @notify="handleUpdateB" />
  </div>
</template>

<script>
import ChildComponentA from '../components/props/ChildComponentA.vue';
import ChildComponentB from '../components/props/ChildComponentB.vue';

export default {
  components: {
    ChildComponentA,
    ChildComponentB
  },
  data() {
    return {
      parentData: {
        name: 'John Doe',
        age: 30
      }
    };
  },
  methods: {
    handleUpdateA(updatedData) {
      console.log('Data from ChildComponentA:', updatedData);
      this.parentData = { ...this.parentData, ...updatedData };
    },
    handleUpdateB(updatedInfo) {
      console.log('Notification from ChildComponentB:', updatedInfo);
      this.parentData = { ...this.parentData, ...updatedInfo };
    }
  }
};
</script>