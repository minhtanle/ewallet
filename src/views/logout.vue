<template lang="">
  <div>Logout</div>
</template>

<script>
import { useSignOut } from "@/composables/useSignOut";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const { error, signout } = useSignOut();

    async function onLogout() {
      await signout();
      if (!error.value) router.push({ name: "Login" });
    }
    onLogout();

    return {};
  },
};
</script>
