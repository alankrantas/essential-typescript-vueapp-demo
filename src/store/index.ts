import { createStore } from "vuex";
import { Product, Order } from "../data/entities";
import data from "../data/data";

export interface StoreState {
  products: Product[],
  order: Order,
  selectedCategory: string,
  storedId: number
}

type ProductSelection = {
  product: Product,
  quantity: number
}

export default createStore<StoreState>({
  state: {
    products: data(),
    order: new Order(),
    selectedCategory: "全部",
    storedId: 0
  },

  mutations: {
    selectCategory(currentState: StoreState, category: string) {
      currentState.selectedCategory = category;
    },
    addToOrder(currentState: StoreState, selection: ProductSelection) {
      currentState.order.addProduct(selection.product, selection.quantity);
    },
    addProducts(currentState: StoreState, products: Product[]) {
      currentState.products = products;
    },
    setOrderId(currentState: StoreState, id: number) {
      currentState.storedId = id;
    },
    resetOrder(currentState: StoreState) {
      currentState.order = new Order();
    }
  },

  getters: {
    categories(state): string[] {
      return ["全部", ...new Set(state.products.map(p => p.category))];
    },
    filteredProducts(state): Product[] {
      return state.products.filter(p => state.selectedCategory === "全部"
        || state.selectedCategory === p.category);
    },
    storeId(state): number {
      return state.storedId;
    }
  },

  actions: {
    async loadProducts(context, task: () => Promise<Product[]>) {
      const data = await task();
      context.commit("addProducts", data);
    },
    async storeOrder(context, task: (order: Order) => Promise<number>) {
      context.commit("setOrderId", await task(context.state.order));
      context.commit("resetOrder");
    }
  },

  modules: {
  }
})