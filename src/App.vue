<template>
  <div id="app" class="font-anko-regular">
    <header class="flex justify-between">
      <div class="sm:w-1/5 px-2 text-left">
        <img class="mx-auto" alt="Vue logo" src="@/assets/images/logo.png">
      </div>

      <div class="md:bg-white sm:w-2/5 w-full px-2 py-2 sm:bg-warm">
        <input
          class="bg-white shadow focus:outline-0 focus:shadow-outline border border-cool-100 py-2 px-4 block w-full appearance-none leading-normal"
          type="text"
          name="search"
          placeholder="Find a product"
        >
      </div>

      <div class="sm:w-2/5 px-2">
        <div class="flex justify-between">
          <Button tag="a" href="#" styles="w-1/4">
            <Icon name="location" label="Stores"></Icon>
          </Button>
          <Icon name="heart" size="lg" label="Wishlist" styles="w-1/4"></Icon>
          <Icon name="bag" label="Bag" styles="w-1/4"></Icon>
          <Icon name="person" label="Sign in" styles="w-1/4"></Icon>
        </div>
      </div>
    </header>
    <Heading level="h1">Hello</Heading>
    <Button theme="primary" tag="input">abc</Button>
  </div>
</template>

<script>
import { Button, Heading, Icon } from './components';

import './main.css';

export default {
  name: 'App',
  components: {
    Button,
    Heading,
    Icon
  }
};
</script>

<style lang="postcss">
#app {
  @apply my-2 text-center;
}
</style>
