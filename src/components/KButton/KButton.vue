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
  name: 'KButton',

  data() {
    return {
      themes: {
        default: '',
        primary: 'btn-primary',
        secondary: 'btn-secondary',
        info: 'btn-info',
        warn: 'btn-warn',
        danger: 'btn-danger'
      },

      sizes: {
        normal: '',
        small: 'btn-sm',
        large: 'btn-lg'
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
  @apply font-bold py-2 px-4 rounded;
}
.btn-primary {
  @apply bg-red-500 text-white;
}
.btn-primary:hover {
  @apply bg-red-700;
}
</style>
