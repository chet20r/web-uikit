<template>
  <button
    :name="name"
    :aria-label="a11yLabel"
    class="btn empty before:empty after:empty"
    :class="[theme, ...styleOverride]"
    :type="type"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <slot name="left"></slot>
    <slot></slot>
    <slot name="right"></slot>
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
      default: 'button',
      validator: type => ['button', 'submit', 'reset'].indexOf(type) !== -1
    },
    name: {
      required: false,
      type: String,
      default: ''
    },
    a11yLabel: {
      required: false,
      type: String,
      default: ''
    },
    disabled: {
      required: false,
      type: Boolean,
      default: false
    },
    theme: {
      required: false,
      type: String,
      default: 'btn-primary',
      validator: theme =>
        [
          'btn-primary',
          'btn-secondary',
          'btn-primary-inverted',
          'btn-secondary-inverted'
        ].indexOf(theme) !== -1
    },
    styleOverride: {
      required: false,
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="postcss">
.btn {
  @apply px-4 py-4 border-2 border-solid rounded uppercase font-anko-bold text-base shadow;
}

.btn-primary {
  @apply border-blue bg-blue text-white;
}

.btn-primary:hover {
  @apply bg-white text-blue;
}

.btn-secondary {
  @apply border-orange bg-orange text-white;
}

.btn-secondary:hover {
  @apply bg-white text-orange;
}

.btn-secondary:focus {
  @apply border-orange;
}

.btn-primary-inverted {
  @apply border-blue text-blue;
}

.btn-primary-inverted:hover {
  @apply bg-blue text-white;
}

.btn-secondary-inverted {
  @apply border-orange text-orange;
}

.btn-secondary-inverted:hover {
  @apply bg-orange text-white;
}
</style>
