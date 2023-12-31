import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";

const error = ref(null);
const isPending = ref(false);

async function signin(email, password) {
  error.value = null;
  isPending.value = true;

  try {
    const response = await projectAuth.signInWithEmailAndPassword(
      email,
      password
    );

    if (!response) throw new Error("Could not login");

    return response;
  } catch (err) {
    console.log(err);
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
}

export function useSignIn() {
  return { error, isPending, signin };
}
