<template>
  <v-app>
    <navigationBar/>
    <v-content>
      <siteBody/>
    </v-content>
  </v-app>
</template>

<style>
v-content{
  background: black;
}
</style> 

<script>
//import HelloWorld from './components/HelloWorld';
import navigationBar from './components/navigationBar';
import siteBody from './components/siteBody';


export default {
  name: 'App',

  components: {
    siteBody,
    //HelloWorld,
    navigationBar
  },

  data: () => ({
    //
  }),
};
</script>
