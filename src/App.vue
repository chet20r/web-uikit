<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/images/logo.png">
    <KButton theme="primary">Add to Cart</KButton>
    <h1 class="font-anko-bold">sasadfa</h1>
    <h1 class="font-anko">sasadfa</h1>
  </div>
</template>

<script>
import KButton from './components/KButton';
import './main.css';
export default {
  name: 'app',
  components: {
    KButton
  }
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
