<template>
  <div v-if="!route.meta.isChild" class="">
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
            class="flex h-14 py-2 px-4 bg-white hover:bg-slate-50 shadow last:text-red-600"
          >
            <router-link
              :to="{ name: profileOption.route.name }"
              class="flex items-center w-full"
            >
              <div class="grow w-full">
                <div class="flex items-center text-left">
                  <font-awesome-icon :icon="profileOption.icon" size="lg" />
                  <h5 class="pl-4">{{ $t(profileOption.name) }}</h5>
                </div>
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
  <router-view></router-view>
</template>

<script>
import { reactive } from "vue";
import { useUser } from "@/composables/useUser";
import { useRoute } from "vue-router";

export default {
  setup() {
    const { getUser } = useUser();
    const { user } = getUser();

    const route = useRoute();

    const profileOptions = reactive([
      {
        name: "my-wallet",
        icon: ["fas", "wallet"],
        route: {
          name: "Profile.Wallet",
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

    return { route, user, profileOptions };
  },
};
</script>
