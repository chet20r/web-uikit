<template>
  <button :class="[...styles]" :type="type" :active="active" @click="$emit('click', $event)">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'k-button',
  data() {
    return {};
  },
  props: {
    type: {
      required: false,
      type: String,
      default: 'button'
    },
    active: {
      required: false,
      type: Boolean,
      default: true
    },
    styles: {
      required: false,
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="postcss">
</style>