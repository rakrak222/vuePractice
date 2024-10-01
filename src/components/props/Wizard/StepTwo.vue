<template>
  <div>
    <h2>Step 2: Address</h2>
    <div class="mb-4">
      <label for="address">Address:</label>
      <input v-model="address" id="address" class="border p-2 rounded" placeholder="Enter your address" />
    </div>

    <!-- 이전/다음 단계로 이동 -->
    <button @click="$emit('prevStep')" class="bg-gray-500 text-white px-4 py-2 rounded mr-2">
      Previous
    </button>
    <button @click="goToNextStep" class="bg-blue-500 text-white px-4 py-2 rounded">
      Next
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      address: ''
    };
  },
  methods: {
    goToNextStep() {
      // 부모 컴포넌트로 주소 데이터를 전달하고 다음 단계로 이동
      this.$emit('nextStep', { address: this.address });
    }
  }
};
</script>

