<template>
  <div id= "app">
  <img alt="Vue logo" src="./assets/logo.png">
  <HPostComponent/>
  </div>
</template>

<script>
import HPostComponent from './components/PostComponent.vue'

export default {
  name: 'App',
  components: {
    HPostComponent
  }
}
</script>

<style>
#app {
  font-family: Calibri, 'Trebuchet MS', sans-serif, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body{
    margin-top: 0%;
    margin: 0;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: 
    linear-gradient(62deg, rgba(132, 230, 145, 0.973) 13%, rgba(122, 219, 154, 0.5)4%),
    linear-gradient(44deg, rgba(97, 212, 187, 0.079) 39%, rgba(204, 235, 210, 0.993)18%),
    linear-gradient(118deg, rgba(53, 110, 82, 0.031) 13%, rgba(17, 167, 147, 0.5)54%),
    linear-gradient(58deg, rgba(15, 100, 67, 0.161) 83%, rgba(21, 232, 240, 0.5)23%);
    background-blend-mode: normal, lighten, multiply, hard-light ;
    font-family: "DM Sans", sans-serif;
    overflow:auto;

}
</style>
