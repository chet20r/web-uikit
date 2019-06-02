<template>
  <span class="icon" :class="name"></span>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    name: {
      required: true,
      type: String,
      default: 'cart',
      validator: name => name.match(/(bag|location|heart|)/)
    }
  }
};
</script>

<style lang="postcss">
.icon {
  @apply font-anko-icon text-cool-400 text-4xl align-middle;
  &.bag:before {
    content: '\E606';
  }
  &.location:before {
    content: '\E613';
  }
}
</style>
