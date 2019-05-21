<template>
  <div id="app" class="font-anko-bold">
    <img class="mx-auto" alt="Vue logo" src="@/assets/images/logo.png">
    <k-button
      :styles="['bg-red-700', 'text-white', 'px-5', 'py-5', 'my-10' ,'uppercase', 'rounded']"
    >Add To Cart</k-button>
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

<style lang="scss">
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
