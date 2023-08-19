<template>
  <navigation-top :isChild="isChild" :title="title" />

  <div class="mt-14">
    <IconLoading v-if="isLoading" class="mt-4" />
    <div class="container" v-for="wallet in listWallet" :key="wallet.id">
      <div class="row px-4 py-2 bg-white hover:bg-slate-50 shadow">
        <div class="flex justify-between items-center">
          <div class="flex items-center text-left">
            <font-awesome-icon :icon="['fas', 'wallet']" size="xl" />
            <div class="flex flex-col pl-4">
              <h4 class="font-bold">{{ wallet.name }}</h4>
              <span>{{ $filters.toCurrency(wallet.balance) }}</span>
            </div>
          </div>
          <div class="text-right">
            <drop-down :menuAction="menuAction" :row-id="wallet.id"></drop-down>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!isLoading" class="row my-2">
      <!-- Thêm -->
      <div class="flex justify-center w-full text-center text-white">
        <button
          class="rounded-full bg-blue-500 hover:bg-blue-700 w-24 p-2"
          @click="showModal = true"
        >
          Thêm
        </button>
      </div>
    </div>

    <!-- Modal Create -->
    <transition name="modal">
      <modal-vue
        v-if="showModal"
        @close="showModal = false"
        @submit-form="onSubmit"
        submitLabel="OK"
        cancelLabel="Hủy"
      >
        <template v-slot:header>
          <h3>Thêm ví</h3>
        </template>
        <template v-slot:body>
          <div class="mb-6">
            <CustomInput
              label="Đặt tên ví"
              placeholder="Ngân hàng ABC"
              :value="walletName"
              :in-valid="walletNameInvalid"
              :is-focus="walletNameFocus"
              @update:value="walletName = $event"
            />
          </div>
          <div class="mb-6">
            <CustomInput
              type="number"
              label="Số dư hiện tại"
              :value="walletBalance"
              @update:value="walletBalance = $event"
            />
          </div>
        </template>
      </modal-vue>
    </transition>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import NavigationTop from "@/components/NavigationTop.vue";
import IconLoading from "@/components/IconLoading.vue";
import useCollection from "@/composables/useCollection";
import ModalVue from "@/components/Modal.vue";
import { useUser } from "@/composables/useUser";
import CustomInput from "@/components/CustomInput.vue";
import DropDown from "@/components/CustomDropdown.vue";
import { toast } from "vue3-toastify";

export default {
  components: {
    NavigationTop,
    IconLoading,
    ModalVue,
    CustomInput,
    DropDown,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();

    const isChild = route.meta?.isChild;
    const title = "List Wallet";
    const showModal = ref(false);
    const isLoading = ref(true);
    const listWallet = ref([]);
    const { getRecord, addRecord, deleteRecord, error } =
      useCollection("wallets");
    const { getUser } = useUser();
    const { user } = getUser();

    const walletName = ref(null);
    const walletNameFocus = ref(false);
    const walletNameInvalid = ref(false);
    const walletBalance = ref(0);

    const menuAction = [
      {
        name: "Đổi tên",
        action: renameWallet,
      },
      {
        name: "Xóa",
        action: removeWallet,
      },
    ];

    function renameWallet(rowid) {
      return router.push({
        name: "Profile.Wallet.Update",
        params: { id: rowid },
      });
    }

    async function removeWallet(rowid) {
      const isDelete = confirm("Xác nhận xóa ví");
      if (isDelete) {
        await deleteRecord(rowid);
        if (error.value) {
          console.log("error", error);
          toast.error("Vui lòng thử lại");
        } else {
          showModal.value = false;
          toast.success("Đã xóa ví thành công");
          getWallet();
        }
      }
    }

    onMounted(() => getWallet());

    async function getWallet() {
      listWallet.value = [];
      const result = await getRecord();
      result.forEach((doc) => {
        listWallet.value.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      isLoading.value = false;
    }

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
      if (!walletBalance.value || walletBalance.value.length < 1) {
        walletBalance.value = 0;
      }

      const walletCreate = {
        name: walletName.value,
        balance: parseInt(walletBalance.value),
        uid: user.value.uid,
      };

      await addRecord(walletCreate);
      if (error.value) {
        console.log("error", error);
        toast.error("Vui lòng thử lại");
      } else {
        showModal.value = false;
        toast.success("Thêm ví thành công");
        getWallet();
      }
    }

    return {
      isChild,
      title,
      route,
      listWallet,
      isLoading,
      showModal,
      onSubmit,
      walletName,
      walletNameInvalid,
      walletNameFocus,
      walletBalance,
      menuAction,
    };
  },
};
</script>
