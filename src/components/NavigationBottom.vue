<template>
  <footer id="footer" class="fixed bottom-0 w-full">
    <div class="bottom-0 drop-shadow-md h-16 shadow-slate-400 border-t-1">
      <ul class="h-full flex flex-row justify-around items-center">
        <li v-for="(menu, index) of menus" :key="index">
          <router-link
            :to="{ name: menu.route }"
            class="text-gray-500 hover:underline flex flex-col"
          >
            <font-awesome-icon
              :class="menu.icon.class"
              :icon="menu.icon.value"
              :size="defaultIconSize(menu.icon.size)"
            />
            <span class="mt-1">{{ menu?.title }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  setup() {
    const menus = [
      {
        title: "Tổng quan",
        icon: {
          value: ["fas", "house"],
        },
        route: "Home",
      },
      {
        title: "Giao dịch",
        icon: {
          value: ["fas", "money-bill-transfer"],
        },
        route: "Transaction",
      },
      {
        icon: {
          value: ["fas", "circle-plus"],
          size: "2xl",
          class: "text-blue-800",
        },
        route: "NewTransaction",
      },
      {
        title: "Ngân sách",
        icon: {
          value: ["fas", "pager"],
        },
        route: "Budget",
      },
      {
        title: "Tài khoản",
        icon: {
          value: ["fas", "user"],
        },
        route: "Profile",
      },
    ];

    function defaultIconSize(size) {
      return size ?? "xl";
    }

    return { menus, defaultIconSize };
  },
};
</script>

<style scoped>
footer {
  max-width: 414px;
}
.border-t-1 {
  border-top-width: 1px;
}
</style>
