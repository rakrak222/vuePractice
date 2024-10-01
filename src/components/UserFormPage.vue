<template>
  <div>
    <h1>회원 정보 입력</h1>
    <form @submit.prevent="submitForm"> <!--폼 제출 시 페이지 새로고침을 방지하고 submitForm 메서드 실행-->
      <label for="name">이름:</label>
      <input v-model="user.name" type="text" id="name" />

      <label for="email">이메일:</label>
      <input v-model="user.email" type="email" id="email" />

      <label for="age">나이:</label>
      <input v-model.number="user.age" type="number" id="age" /><!--v-model.number로 숫자로 변환-->

      <p>동의함: <input v-model="user.agree" type="checkbox" /></p>

      <!-- 자식 컴포넌트에 v-model 바인딩 -->
      <PasswordInput v-model="user.password" />

      <button type="submit">제출</button>
    </form>

    <p>회원 정보 요약:</p>
    <ul>
      <li>이름: {{ user.name }}</li>
      <li>이메일: {{ user.email }}</li>
      <li>나이: {{ user.age }}</li>
      <li>비밀번호: {{ user.password }}</li>
      <li>동의함: {{ user.agree ? '예' : '아니요' }}</li>
    </ul>
  </div>
</template>

<script>
import PasswordInput from './forms/PasswordInput.vue';

export default {
  components: {
    PasswordInput
  },
  data() {
    return {
      user: {
        name: '',
        email: '',
        age: null,
        agree: false,
        password: ''
      }
    };
  },
  methods: {
    submitForm() {
      console.log("제출된 회원 정보:", this.user);
      alert("회원 정보가 제출되었습니다.");
      // "form-submitted" 이벤트 발생과 함께 user 데이터를 전달
      this.$emit('form-submitted', this.user);
    }
  }
};
</script>
