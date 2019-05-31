<template>
  <div id="app" class="font-anko-regular">
    <img class="mx-auto mx-4 my-4" alt="Vue logo" src="@/assets/images/logo.png">
    <Button v-on="$listeners">Add To Bag</Button>
    <Heading level="h1">Heading Level 1</Heading>
    <Heading level="h2">Heading Level 2</Heading>
    <Heading level="h3">Heading Level 3</Heading>
    <Heading level="h4">Heading Level 4</Heading>
    <Heading level="h5">Heading Level 5</Heading>
    <Heading level="h6">Heading Level 6</Heading>
  </div>
</template>

<script>
import Button from './components/Button';
import Heading from './components/Heading';

import './main.css';

export default {
  name: 'App',
  components: {
    Button,
    Heading
  }
};
</script>

<style lang="postcss">
#app {
  @apply my-10 text-center;
}
</style>
