import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";

const error = ref(null);

async function signout() {
  error.value = null;

  try {
    const response = await projectAuth.signOut();
    return response;
  } catch (err) {
    error.value = err.message;
  }
}

export function useSignOut() {
  return { error, signout };
}
