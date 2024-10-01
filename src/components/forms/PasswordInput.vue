<template>
  <div>
    <label for="password">비밀번호:</label>
    <input v-model="passwordInput" type="password" id="password" />

    <p v-if="passwordInput.length < 6" style="color: red;">
      비밀번호는 6자 이상이어야 합니다.
    </p>
  </div>
</template>

<script>
export default {
  props: ['modelValue'],  // 부모 컴포넌트로부터 v-model의 기본 값 (modelValue)
  emits: ['update:modelValue'],  // 부모에게 업데이트 이벤트를 발생시킴
  computed: {
    passwordInput: {
      get() {
        return this.modelValue;  // v-model의 값은 modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value);  // 값이 바뀔 때 부모에게 알림
      }
    }
  }
};
</script>
