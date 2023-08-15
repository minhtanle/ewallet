<template>
  <div class="">
    <!-- Avatar -->
    <div class="container mx-auto p-4 flex flex-col items-center">
      <div class="w-24 h-24">
        <img
          class="w-full h-24 object-cover"
          src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
          alt=""
        />
      </div>
      <h3 class="font-bold text-2xl text-primary mt-2 text-blue-600">
        {{ user.displayName }}
      </h3>
      <span>{{ user.email }}</span>
    </div>

    <hr />

    <div class="grid grid-cols-1">
      <div class="col-span-1">
        <ul>
          <li
            v-for="profileOption in profileOptions"
            :key="profileOption.name"
            class="hover:bg-slate-50 py-2 px-4"
          >
            <router-link
              :to="profileOption.route"
              class="flex justify-between items-center"
            >
              <div class="flex items-center text-left">
                <font-awesome-icon :icon="profileOption.icon" />
                <h5 class="pl-4">{{ $t(profileOption.name) }}</h5>
              </div>
              <div class="text-right">
                <font-awesome-icon :icon="['fas', 'chevron-right']" />
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import { useUser } from "@/composables/useUser";

export default {
  setup() {
    const { getUser } = useUser();
    const { user } = getUser();

    const profileOptions = reactive([
      {
        name: "my-wallet",
        icon: ["fas", "wallet"],
        route: {
          name: "Home",
          params: {},
        },
      },
      {
        name: "logout",
        icon: ["fas", "right-from-bracket"],
        route: {
          name: "Logout",
          params: {},
        },
      },
    ]);

    return { user, profileOptions };
  },
};
</script>
