<template>
  <div class="p-1 bg-secondary text-white text-end">
    {{ displayText }}
    <router-link to="/order" class="btn btn-primary m-1">
      送出訂單
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Header",

  setup() {
    return { store: useStore() };
  },

  computed: {
    displayText(): string {
      const count = this.store.state.order.productCount;
      return count === 0
        ? "(購物車無商品)"
        : `購物車內有 ${count} 件商品，` +
            `$${this.store.state.order.total.toFixed(2)}`;
    },
  },
});
</script>