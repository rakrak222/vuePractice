<template>
  <div>
    <h2>Step 3: Age</h2>
    <div class="mb-4">
      <label for="age">Age:</label>
      <input v-model="age" id="age" type="number" class="border p-2 rounded" placeholder="Enter your age" />
    </div>

    <!-- 이전 단계 및 제출 -->
    <button @click="$emit('prevStep')" class="bg-gray-500 text-white px-4 py-2 rounded mr-2">
      Previous
    </button>
    <button @click="submitForm" class="bg-green-500 text-white px-4 py-2 rounded">
      Submit
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      age: ''
    };
  },
  methods: {
    submitForm() {
      // 부모 컴포넌트로 나이 데이터를 전달하고 폼 제출
      this.$emit('submitForm', { age: this.age });
    }
  }
};
</script>

