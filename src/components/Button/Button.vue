<template>
  <component
    :is="tag"
    :aria-label="a11yLabel"
    class="btn"
    :class="[theme, { inverted, rounded, disabled }, ...styles]"
    :type="type"
    v-bind="$attrs"
    @click="$emit('click', $event)"
  >
    <slot name="left"></slot>
    <slot></slot>
    <slot name="right"></slot>
  </component>
</template>

<script>
import propMixins from '@/components/mixins/props';
export default {
  name: 'Button',
  mixins: [propMixins],
  data() {
    return {};
  },
  props: {
    tag: {
      required: true,
      type: String,
      default: 'button',
      validator: tag => tag.match(/(button|a)/)
    },
    type: {
      required: false,
      type: String,
      default: 'button',
      validator: type => type.match(/(button|submit|reset)/)
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
      default: 'primary',
      validator: theme => theme.match(/(primary|secondary)/)
    },
    rounded: {
      required: false,
      type: Boolean,
      default: false
    },
    inverted: {
      required: false,
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="postcss">
.btn {
  @apply px-2 py-2 
    border-2 border-solid 
    rounded uppercase font-anko-bold text-base 
    shadow;

  &:focus {
    @apply outline-none shadow-outline;
  }

  &.rounded {
    @apply px-4 rounded-full;
  }

  &.primary {
    @apply border-blue bg-blue text-white;
    &:hover {
      @apply bg-white text-blue;
    }
    &.inverted {
      @apply text-blue bg-white;
      &:hover {
        @apply bg-blue text-white;
      }
    }
  }

  &.secondary {
    @apply border-orange bg-orange text-white;
    &:hover {
      @apply bg-white text-orange;
    }
    &.inverted {
      @apply text-orange bg-white;
      &:hover {
        @apply bg-orange text-white;
      }
    }
  }
}
</style>
