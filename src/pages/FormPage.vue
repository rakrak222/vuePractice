<template>
  <div>
    <UserFormPage @form-submitted="handleFormSubmit" />
  </div>
</template>

<script>
import UserFormPage from '../components/UserFormPage.vue';

export default {
  components: {
    UserFormPage
  },
  methods: {
    handleFormSubmit(formData) {
      console.log("폼 데이터:", formData);
      // formData 처리 로직 (예: API 전송)
    }
  }
};
</script>


<!--
컴포넌트 분리:
UserFormPage: 사용자 폼을 관리하는 독립적인 컴포넌트로, 입력 데이터를 처리하고 제출 이벤트를 발생시킵니다.
PasswordInput: 비밀번호 입력 필드에 특화된 자식 컴포넌트로, 독립적으로 비밀번호와 관련된 입력 처리 및 유효성 검사를 관리할 수 있습니다.
FormPage: 상위 컴포넌트로, 이벤트 수신을 통해 폼 데이터가 제출된 후에 추가 로직을 처리합니다 (예: API 전송 등).
-->