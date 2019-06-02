<template>
  <component
    :is="tag"
    class="btn"
    :class="[theme, { outline, rounded, disabled, fullwidth }, size, ...styles]"
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
  props: {
    tag: {
      required: false,
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
    outline: {
      required: false,
      type: Boolean,
      default: false
    },
    fullwidth: {
      required: false,
      type: Boolean,
      default: false
    },
    size: {
      required: false,
      type: String,
      default: 'md',
      validator: size => size.match(/(sm|md|lg|xl)/)
    }
  }
};
</script>

<style lang="postcss">
.btn {
  @apply px-2 py-2
    border-2 border-solid 
    uppercase font-anko-bold
    rounded shadow;

  &.sm {
    @apply text-sm px-4 py-1;
  }
  &.md {
    @apply text-base;
  }
  &.lg {
    @apply text-lg;
  }
  &.xl {
    @apply text-xl;
  }

  &.fullwidth {
    @apply w-full;
  }

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
    &.outline {
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
    &.outline {
      @apply text-orange bg-white;
      &:hover {
        @apply bg-orange text-white;
      }
    }
  }
}
</style>
