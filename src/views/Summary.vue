<template>
  <div class="m-2 text-center">
    <h2>謝謝您!</h2>
    <p>感謝您的訂購！您的訂單編號為 #{{ id }}。</p>
    <p>我們將安排盡快寄出商品。</p>
    <router-link to="/products" class="btn btn-primary">返回</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";
import { StoreState } from "../store";

export default defineComponent({
  name: "Summary",

  computed: {
    ...mapState<StoreState>({
      id: (state: StoreState) => state.storedId,
    }),
  },
});
</script>