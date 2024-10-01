<template>
  <div>
    <h2>Step 1: Personal Information</h2>
    <div class="mb-4">
      <label for="name">Name:</label>
      <input v-model="name" id="name" class="border p-2 rounded" placeholder="Enter your name" />
    </div>

    <div class="mb-4">
      <label for="email">Email:</label>
      <input v-model="email" id="email" class="border p-2 rounded" placeholder="Enter your email" />
    </div>

    <!-- 다음 단계로 이동 -->
    <button @click="goToNextStep" class="bg-blue-500 text-white px-4 py-2 rounded">
      Next
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: ''
    };
  },
  methods: {
    goToNextStep() {
      // 부모 컴포넌트로 이름과 이메일 전달
      this.$emit('nextStep', { name: this.name, email: this.email });
    }
  }
};
</script>

