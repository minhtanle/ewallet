<template>
  <div class="mb-1">
    <label :for="id" class="block mb-1">{{ label }}</label>
    <input
      class="w-full p-2 border-x border-y border-solid rounded"
      ref="inputRef"
      :class="{ invalid: inValid }"
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('update:value', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    type: {
      type: String,
      default: "text",
    },
    label: String,
    placeholder: String,
    value: [String, Number],
    inValid: Boolean,
    isFocus: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    isFocus(newVal) {
      if (newVal) {
        this.focus(); // Focus the input element
      }
    },
  },
  methods: {
    focus() {
      this.$refs.inputRef.focus(); // Focus the input element
    },
  },
};
</script>
