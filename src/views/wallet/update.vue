<template>
  <navigation-top isChild="isChild" title="Cập nhật ví" />

  <div class="mt-14">
    <div class="container">
      <div class="mb-6 p-4">
        <CustomInput
          label="Đặt tên ví"
          placeholder="Ngân hàng ABC"
          :value="walletName"
          :in-valid="walletNameInvalid"
          :is-focus="walletNameFocus"
          @update:value="walletName = $event"
        />
        <div class="flex justify-around gap-4 mt-4">
          <button
            @click="$router.go(-1)"
            class="modal-default-button bg-gray-400 hover:bg-gray-500"
          >
            Hủy
          </button>
          <button
            class="modal-default-button bg-green-600 hover:bg-green-700"
            @click="onSubmit"
          >
            Cập nhật
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import NavigationTop from "@/components/NavigationTop.vue";
import CustomInput from "@/components/CustomInput.vue";
import useCollection from "@/composables/useCollection";
import { toast } from "vue3-toastify";

export default {
  components: {
    NavigationTop,
    CustomInput,
  },
  setup() {
    const route = useRoute();
    const isChild = route.meta?.isChild;

    const { getSingleRecord, updateRecord, error } = useCollection("wallets");
    const walletName = ref(null);
    const walletNameFocus = ref(false);
    const walletNameInvalid = ref(false);
    const wallet = ref(null);
    const walletId = route.params.id;

    function resetInputName() {
      walletNameInvalid.value = false;
      walletNameFocus.value = false;
    }

    async function onSubmit() {
      resetInputName();

      if (!walletName.value || walletName.value.length < 1) {
        walletNameInvalid.value = true;
        walletNameFocus.value = true;
        return;
      }

      const walletUpdate = {
        name: walletName.value,
      };
      await updateRecord(walletId, walletUpdate);

      if (error.value) {
        console.log("error", error);
        toast.error("Vui lòng thử lại");
      } else {
        toast.success("Cập nhật ví thành công");
      }
    }

    onMounted(async () => await getWallet());

    async function getWallet() {
      const result = await getSingleRecord(walletId);
      if (result.exists) {
        wallet.value = result.data();
        walletName.value = wallet.value.name;
      } else {
        toast.error("Dữ liệu không tồn tại");
      }
    }

    return {
      isChild,
      onSubmit,
      walletName,
      walletNameInvalid,
      walletNameFocus,
    };
  },
};
</script>
