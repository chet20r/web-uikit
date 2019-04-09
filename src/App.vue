<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/images/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"></HelloWorld>
    <KButton theme="primary">Default</KButton>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import KButton from './components/KButton';
import './main.css';
export default {
  name: 'app',
  components: {
    HelloWorld,
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
