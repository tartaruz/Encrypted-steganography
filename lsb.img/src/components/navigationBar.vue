<template>
    <v-app-bar
    app
    color="black"
    dark
    >
    <div id="title" class="d-flex align-center">s7eganoGrAphy</div>

    <v-spacer></v-spacer>

    <v-btn
        href="https://github.com/tartaruz/Encrypted-steganography"
        target="_blank"
        text
    >
    <v-img
        alt="Github logo"
        class="shrink mt-1 hidden-sm-and-down"
        contain
        src="@/img/githubLogo.svg"
        width="30"
        />
    </v-btn>
    </v-app-bar>
  
</template>

<script>
export default {

}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap');

  #title {
    font-family: 'Major Mono Display', monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #ffffff;
    font-size: 32px;
  }
</style>


