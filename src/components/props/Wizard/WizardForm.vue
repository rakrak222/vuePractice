<template>
  <div class="wizard-form">
    <h1>Interactive Multi-step Form</h1>

    <!-- 현재 단계에 따라 다른 자식 컴포넌트 렌더링 -->
    <div v-if="step === 1">
      <StepOne @nextStep="handleNext" />
    </div>
    <div v-if="step === 2">
      <StepTwo @prevStep="handlePrev" @nextStep="handleNext" />
    </div>
    <div v-if="step === 3">
      <StepThree @prevStep="handlePrev" @submitForm="submitWizardForm" />
    </div>

    <!-- 단계 정보 -->
    <div class="wizard-navigation">
      <p>Step {{ step }} of 3</p>
    </div>
  </div>
</template>

<script>
import StepOne from './StepOne.vue';
import StepTwo from './StepTwo.vue';
import StepThree from './StepThree.vue';

export default {
  components: {
    StepOne,
    StepTwo,
    StepThree
  },
  data() {
    return {
      step: 1,  // 현재 단계
      formData: {
        name: '',
        email: '',
        address: '',
        age: ''
      }
    };
  },
  methods: {
    handleNext(stepData) {
      // 현재 단계 데이터를 수집
      this.formData = { ...this.formData, ...stepData };
      this.step++;
    },
    handlePrev() {
      this.step--;
    },
    submitWizardForm(finalData) {
      // 마지막 단계에서 최종 데이터 제출
      this.formData = { ...this.formData, ...finalData };
      console.log('Final Form Data:', this.formData);
      alert('Form submitted successfully!');
    }
  }
};
</script>

<style scoped>
.wizard-form {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
.wizard-navigation {
  margin-top: 20px;
}
</style>

