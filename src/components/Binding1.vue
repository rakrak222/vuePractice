<template lang="">
  <div class="profile-card p-6 bg-white shadow-lg rounded-lg">
    <!-- Mustache 구문을 사용하여 사용자 이름과 설명 출력 -->
    <h2 class="text-2xl font-bold">{{ user.name }}</h2>
    <p class="text-gray-600">{{ user.description }}</p>

    <!-- v-bind 사용하여 프로필 이미지 바인딩 -->
    <img :src="user.profileImage" alt="프로필 이미지" class="w-32 h-32 rounded-full object-cover my-4" />

    <!-- v-bind 사용하여 링크에 사용자 ID를 바인딩 -->
    <a :href="`/user/${user.id}/edit`" class="text-blue-500 hover:underline">
      프로필 수정하기
    </a>

    <!-- 사용자 활동 내역을 목록으로 출력 -->
    <ul class="mt-4 space-y-2">
      <li v-for="(activity, index) in user.activities" :key="index" class="flex justify-between">
        <!-- 활동 이름 출력 -->
        <span>{{ activity.name }}</span>
        <!-- v-bind로 링크 바인딩 -->
        <a :href="activity.link" class="text-blue-500 hover:underline">보기</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name : 'binding1Page',
  data() {
    return {
      user: {
        name: "홍길동", // 사용자 이름
        description: "Vue.js 개발자", // 사용자 설명
        profileImage: "https://example.com/profile.jpg", // 프로필 이미지 URL
        id: 12345, // 사용자 ID
        activities: [ // 사용자 활동 내역
          { name: "게시물 1", link: "/post/1" },
          { name: "게시물 2", link: "/post/2" },
          { name: "게시물 3", link: "/post/3" }
        ]
      }
    };
  }
}
</script>
<style lang="">
  
</style>