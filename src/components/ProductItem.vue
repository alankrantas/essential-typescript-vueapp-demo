<template>
  <div class="card m-1 p-1 bg-light">
    <h4>
      {{ product.name }}
      <span class="badge rounded-pill bg-primary float-end">
        ${{ product.price.toFixed(2) }}
      </span>
    </h4>
    <div class="card-text bg-white p-1">
      {{ product.description }}
      <button class="btn btn-success btn-sm float-end" @click="handleAddToCart">
        放入購物車
      </button>
      <select
        class="form-control-inline float-end m-1"
        v-model.number="quantity"
      >
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Product } from "../data/entities";

export default defineComponent({
  name: "ProductItem",

  props: {
    product: {
      type: Object as PropType<Product>,
    },
  },

  data() {
    return {
      quantity: 1,
    };
  },

  methods: {
    handleAddToCart() {
      this.$emit("addToCart", {
        product: this.product,
        quantity: this.quantity,
      });
    },
  },
});
</script>

