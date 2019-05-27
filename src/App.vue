<template>
  <div id="app" class="font-anko-bold">
    <img class="mx-auto mx-4 my-4" alt="Vue logo" src="@/assets/images/logo.png">

    <k-button
      name="Add To Cart"
      theme="btn-secondary-inverted"
      v-bind="$attrs"
      v-on="$listeners"
    >Send Us Your Question</k-button>

    <h1 class="font-anko-regular text-6xl">asdf</h1>
    <h1 class="font-anko-bold">asdf</h1>
    <h1 class="font-anko-italic">asdf</h1>
    <h1 class="font-anko-condensed-regular">asdf</h1>
    <h1>asdf</h1>
  </div>
</template>

<script>
import KButton from './components/KButton';
import './main.css';

export default {
  name: 'App',
  components: {
    KButton
  }
};
</script>

<style lang="postcss">
#app {
  @apply my-10 text-center;
}
</style>
