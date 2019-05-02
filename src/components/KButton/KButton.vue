<template>
  <button
    class="btn"
    :class="[themes[theme], sizes[size]]"
    :type="type"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'k-button',

  data() {
    return {
      themes: {
        primary: 'btn-primary',
        secondary: 'btn-secondary'
      },

      sizes: {
        sm: 'btn-sm',
        md: 'btn-md',
        lg: 'btn-lg',
        xl: 'btn-xl'
      }
    };
  },

  props: {
    type: {
      required: false,
      type: String,
      default: 'button'
    },

    theme: {
      required: false,
      type: String,
      default: 'btn-primary'
    },

    size: {
      required: false,
      type: String,
      default: 'normal'
    },

    disabled: {
      required: false,
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="postcss">
.btn {
  @apply uppercase py-4 px-16 shadow-inner;
}
.btn-primary {
  @apply bg-blue-600 text-white border-blue-600 border-2 border-solid;
}
.btn-primary:hover {
  @apply text-blue-600 bg-white;
}
</style>
