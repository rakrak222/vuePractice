<template>
  <div class="product-list">
    <div v-for="(product) in products" :key="product.id" class="product-item">
      
      <!-- 이미지에 src 속성을 v-bind로 동적 바인딩 -->
      <img :src="product.imageUrl" :alt="product.name" class="product-image" />
      
      <!-- 상품 이름을 텍스트로 표시 -->
      <h3>{{ product.name }}</h3>
      
      <!-- 가격에 따라 다르게 스타일 적용 (v-bind:style) -->
      <p :style="{ color: product.price > 100 ? 'red' : 'green' }">
        ${{ product.price }}
      </p>
      
      <!-- 할인이 있을 경우, 할인율을 동적으로 클래스에 바인딩 -->
      <span v-bind:class="{ 'discounted': product.isDiscounted }">
        {{ product.isDiscounted ? '할인 중!' : '' }}
      </span>

      <!-- 링크에 href 속성을 동적으로 바인딩 -->
      <a :href="`/products/${product.id}`" class="product-link">자세히 보기</a>

      <!-- 재고 상태에 따라 동적으로 버튼 스타일과 활성화 여부 설정 -->
      <button 
        :disabled="!product.inStock" 
        v-bind:class="{ 'out-of-stock': !product.inStock, 'add-to-cart': product.inStock }"
        @click="addToCart(product)"
      >
        {{ product.inStock ? '장바구니에 추가' : '재고 없음' }}
      </button>
      
    </div>
  </div>
</template>

<script>
export default {
  name:'Binding2Page',
  data() {
    return {
      products: [
        { id: 1, name: 'Product 1', price: 120, imageUrl: '/images/product1.jpg', isDiscounted: true, inStock: true },
        { id: 2, name: 'Product 2', price: 90, imageUrl: '/images/product2.jpg', isDiscounted: false, inStock: false },
        { id: 3, name: 'Product 3', price: 150, imageUrl: '/images/product3.jpg', isDiscounted: true, inStock: true },
        // 더 많은 제품 데이터...
      ]
    };
  },
  methods: {
    addToCart(product) {
      // 장바구니에 상품 추가 로직
      alert(`${product.name}을(를) 장바구니에 추가했습니다!`);
    }
  }
}
</script>

<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
}

.product-item {
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  margin: 10px;
}

.product-image {
  width: 100%;
  height: auto;
}

.discounted {
  color: red;
  font-weight: bold;
}

.add-to-cart {
  background-color: green;
  color: white;
  padding: 10px;
  cursor: pointer;
}

.out-of-stock {
  background-color: gray;
  color: white;
  padding: 10px;
}
</style>
