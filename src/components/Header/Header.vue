<template>
  <component :is="level" class="heading" :class="styles">
    <slot/>
  </component>
</template>

<script>
import propMixins from '@/components/mixins/props';

export default {
  name: 'Heading',
  mixins: [propMixins],
  data() {
    return {};
  },
  props: {
    level: {
      type: String,
      default: 'h1',
      validator: value => {
        return value.match(/(h1|h2|h3|h4|h5|h6)/);
      }
    }
  }
};
</script>

<style lang="postcss">
.heading {
  @apply py-2 px-2;
}
</style>
