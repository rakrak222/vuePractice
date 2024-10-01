<template>
  <div class="form-section">
    <h3>{{ sectionTitle }}</h3>
    
    <!-- 사용자 입력 -->
    <div class="mb-4">
      <label>Name:</label>
      <input v-model="formData.name" class="border p-2 rounded" placeholder="Enter your name" />
    </div>

    <div class="mb-4">
      <label>Email:</label>
      <input v-model="formData.email" class="border p-2 rounded" placeholder="Enter your email" />
    </div>

    <div class="mb-4">
      <label>Address:</label>
      <input v-model="formData.address" class="border p-2 rounded" placeholder="Enter your address" />
    </div>

    <!-- 부모에게 데이터 전송 -->
    <button @click="submitSectionData" class="bg-green-500 text-white px-4 py-2">
      Submit {{ sectionTitle }} Data
    </button>
  </div>
</template>

<script>
export default {
  props: {
    sectionTitle: String
  },
  data() {
    return {
      formData: {
        name: '',
        email: '',
        address: ''
      }
    };
  },
  methods: {
    submitSectionData() {
      // 부모에게 섹션의 데이터와 섹션 제목을 전달
      this.$emit('submitData', this.sectionTitle, this.formData);
    }
  }
};
</script>

<style scoped>
.form-section {
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
