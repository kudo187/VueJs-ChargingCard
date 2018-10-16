<template>
  <div id="app" class="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  @import "sass/main";
  @import "./assets/client/css/main.css";
  @import "./assets/client/css/manage-card.css";
  @import "./assets/client/styles/main_styles.css";
  @import "./assets/client/styles/responsive.css";  
  
  
  body {
    height: 100%;
    #app {
      height: 100%;
    }
  }
</style>
