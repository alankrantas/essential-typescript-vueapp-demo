<template>
  <Description />
  <router-view />
</template>

<script lang="ts">
import Description from "./components/Description.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: { Description },
});
</script>