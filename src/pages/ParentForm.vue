<template>
  <div>
    <h1>Parent Form</h1>

    <!-- 자식 컴포넌트로 데이터 전달 -->
    <FormSection
      v-for="(section, index) in formSections"
      :key="index"
      :sectionTitle="section.title"
      @submitData="handleFormData"
    />
    
    <!-- 폼 제출 -->
    <button @click="submitForm" class="bg-blue-500 text-white px-4 py-2">
      Submit Form
    </button>

    <div class="mt-4">
      <h2>Collected Data:</h2>
      <pre>{{ collectedData }}</pre>
    </div>
  </div>
</template>

<script>
import FormSection from '../components/props/FormSection.vue';

export default {
  components: {
    FormSection
  },
  data() {
    return {
      formSections: [
        { title: 'Personal Information' },
        { title: 'Contact Details' },
        { title: 'Address' }
      ],
      collectedData: {}
    };
  },
  methods: {
    handleFormData(sectionTitle, data) {
      // 자식 컴포넌트로부터 데이터를 수집
      this.collectedData[sectionTitle] = data;
    },
    submitForm() {
      // 폼 데이터를 제출할 때 전체 데이터를 출력
      console.log('Form Submitted:', this.collectedData);
      // 여기서 서버로 데이터를 전송하거나 다른 처리를 할 수 있습니다.
    }
  }
};
</script>

<style scoped>
pre {
  background-color: #f5f5f5;
  padding: 10px;
  border: 1px solid #ddd;
}
</style>
