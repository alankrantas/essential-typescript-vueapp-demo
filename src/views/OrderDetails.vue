<template>
  <div>
    <h3 class="text-center bg-primary text-white p-2">訂單總覽</h3>
    <div class="p-3">
      <table class="table table-sm table-striped">
        <thead>
          <tr>
            <th>數量</th>
            <th>商品名稱</th>
            <th class="text-end">價格</th>
            <th class="text-end">總計</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="line in order.lines" v-bind:key="line.product.id">
            <td>{{ line.quantity }}</td>
            <td>{{ line.product.name }}</td>
            <td class="text-end">${{ line.product.price.toFixed(2) }}</td>
            <td class="text-end">${{ line.total.toFixed(2) }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th class="text-end" colSpan="3">總金額：</th>
            <th class="text-end">${{ order.total.toFixed(2) }}</th>
          </tr>
        </tfoot>
      </table>
    </div>
    <div class="text-center">
      <router-link to="/products" class="btn btn-secondary m-1">
        返回
      </router-link>
      <button class="btn btn-primary m-1" @click="submit">確認送出</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Order } from "../data/entities";
import { mapState, mapActions } from "vuex";
import store, { StoreState } from "../store";

export default defineComponent({
  name: "OrderDetails",

  computed: {
    ...mapState<StoreState>({
      order: (state: StoreState) => state.order,
      id: (state: StoreState) => state.storedId,
    }),
  },

  methods: {
    ...mapActions(["storeOrder"]),
    submit() {
      this.storeOrder((order: Order) => {
        this.$router.push("/summary");
        return store.getters.storeId + 1;
      });
    },
  },
});
</script>