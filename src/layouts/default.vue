<template lang="">
  <slot />
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
