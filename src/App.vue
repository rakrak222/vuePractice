<template>

<div>
    <h1>My Vue App</h1>
    <nav>
      <!-- 네비게이션 링크 -->
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/binding1">Binding1</router-link> |
      <router-link to="/binding2">Binding2</router-link> |
      <router-link to="/vvalue">V-value</router-link> |
      <router-link to="/props">props And emit</router-link> |
      <router-link to="/props2">props And emit 2</router-link> |
      <router-link to="/wizard">props And emit (마법사 스타일폼)</router-link>
    </nav>
    <router-view></router-view>  <!-- 라우터에 의해 렌더링되는 컴포넌트가 출력되는 곳 -->
  </div>

</template>

<script>
export default {
  name: 'App',
  
};
</script>

<style scoped>
.profile-card {
  max-width: 400px;
  margin: auto;
}
</style>
