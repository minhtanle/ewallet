<template lang="">
  <div class="pb-16">
    <slot />
  </div>
  <NavigationBottom />
</template>

<script>
import NavigationBottom from "@/components/NavigationBottom.vue";

export default {
  components: {
    NavigationBottom,
  },
};
</script>
