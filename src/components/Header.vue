<template>
  <div class="p-1 bg-secondary text-white text-end">
    {{ displayText }}
    <router-link to="/order" class="btn btn-primary m-1">
      Submit Order
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
        ? "(No Selection)"
        : `${count} product(s), ` +
            `$${this.store.state.order.total.toFixed(2)}`;
    },
  },
});
</script>