<template>
  <div id="app" class="font-anko-regular">
    <img class="mx-auto mx-4 my-4" alt="Vue logo" src="@/assets/images/logo.png">

    <Button
      name="Add To Cart"
      theme="btn-secondary-inverted"
      v-bind="$attrs"
      v-on="$listeners"
    >Send Us Your Question</Button>

    <Header level="h1">Heading Level 1</Header>
    <Header level="h2">Heading Level 2</Header>
    <Header level="h3">Heading Level 3</Header>
    <Header level="h4">Heading Level 4</Header>
    <Header level="h5">Heading Level 5</Header>
    <Header level="h6">Heading Level 6</Header>
  </div>
</template>

<script>
import Button from './components/Button';
import Header from './components/Header';

import './main.css';

export default {
  name: 'App',
  components: {
    Button,
    Header
  }
};
</script>

<style lang="postcss">
#app {
  @apply my-10 text-center;
}
</style>
