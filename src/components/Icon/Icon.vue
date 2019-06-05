<template>
  <span class="icon" :class="[name, size]"></span>
</template>

<script>
import propMixins from '@/components/mixins/props';
export const iconNames = [
  'bag',
  'location',
  'heart',
  'person',
  'bang',
  'left',
  'down',
  'cross',
  'up',
  'question',
  'retry',
  'right',
  'lock',
  'dollar-down',
  'chat',
  'book',
  'clipboard',
  'clock',
  'truck'
];
export default {
  name: 'Icon',
  mixins: [propMixins],
  props: {
    name: {
      required: true,
      type: String,
      default: 'cart',
      validator: name => iconNames.indexOf(name) !== -1
    },
    size: {
      required: false,
      type: String,
      default: 'md',
      validator: size => size.match(/sm|md|lg/)
    }
  }
};
</script>

<style lang="postcss">
.icon {
  @apply font-anko-icon text-cool-400 px-4;
  &:hover {
    @apply text-blue;
  }
  &.sm {
    @apply text-base;
  }
  &.md {
    @apply text-2xl;
  }
  &.lg {
    @apply text-4xl;
  }
  &.xl {
    @apply text-6xl;
  }
  &.bag:before {
    content: '\E606';
    @apply px-3 py-0;
  }
  &.location:before {
    content: '\E613';
  }
  &.heart:before {
    content: '\E60C';
  }
  &.person:before {
    content: '\E605';
  }
  &.bang:before {
    content: '\0021';
  }
  &.left:before {
    content: '\003C';
  }
  &.down:before {
    content: '\003E';
  }
  &.cross:before {
    content: '\0058';
  }
  &.up:before {
    content: '\005E';
  }
  &.question:before {
    content: '\E600';
  }
  &.retry:before {
    content: '\E601';
  }
  &.right:before {
    content: '\E602';
  }
  &.lock:before {
    content: '\E603';
  }
  &.dollar-down:before {
    content: '\E604';
  }
  &.chat:before {
    content: '\E607';
  }
  &.book:before {
    content: '\E608';
  }
  &.clipboard:before {
    content: '\E609';
  }
  &.clock:before {
    content: '\E60A';
  }
  &.truck:before {
    content: '\E60B';
  }
}
</style>
