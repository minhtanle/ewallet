<template>
  <header v-if="isChild" id="header" class="h-14 shadow fixed top-0 bg-white">
    <div class="flex flex-auto items-center h-full">
      <div class="w-8 text-center">
        <button @click="onBack">
          <font-awesome-icon :icon="['fas', 'chevron-left']" />
        </button>
      </div>
      <div>{{ title }}</div>
    </div>
  </header>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  props: ["title", "isChild"],
  setup() {
    const router = useRouter();

    function onBack() {
      router.go(-1);
    }

    return { onBack };
  },
};
</script>
