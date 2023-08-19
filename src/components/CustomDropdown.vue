<template>
  <div class="relative" v-click-outside="onClickOut">
    <button @click="isShowDropdown = !isShowDropdown">
      <font-awesome-icon :icon="['fas', 'ellipsis-vertical']" />
    </button>
    <div
      v-if="isShowDropdown"
      class="absolute z-10 right-0 min-w-[6rem] bg-white divide-y divide-gray-100 rounded-lg shadow-lg dark:bg-gray-700 dark:divide-gray-600"
    >
      <ul class="py-2 text-gray-700 dark:text-gray-200">
        <li v-for="menu in menuAction" :key="menu.name">
          <a
            @click="onClick(menu.action, rowId)"
            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >{{ menu.name }}</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    menuAction: Array,
    rowId: [String, Number],
  },
  setup() {
    const isShowDropdown = ref(false);

    function onClickOut() {
      if (isShowDropdown.value == true) {
        isShowDropdown.value = false;
      }
    }

    function onClick(func, rowId) {
      func.call(this, rowId);
      isShowDropdown.value = false;
    }

    return { isShowDropdown, onClick, onClickOut };
  },
};
</script>
