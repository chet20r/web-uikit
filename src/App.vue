<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/images/logo.png">
    <KButton theme="primary">Add to Cart</KButton>
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
