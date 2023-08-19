<template>
  <div class="modal-mask">
    <div class="modal-wrapper" @click.self="$emit('close')">
      <div class="modal-container">
        <div class="modal-header text-lg font-bold border-b">
          <slot name="header"> default header </slot>
        </div>

        <div class="modal-body">
          <slot name="body"> default body </slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            <div class="flex justify-around gap-4">
              <button
                class="modal-default-button bg-gray-400 hover:bg-gray-500"
                @click="$emit('close')"
              >
                {{ cancelLabel }}
              </button>
              <button
                class="modal-default-button bg-green-600 hover:bg-green-700"
                @click="$emit('submitForm')"
              >
                {{ submitLabel }}
              </button>
            </div>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    submitLabel: String,
    cancelLabel: String,
  },
};
</script>
