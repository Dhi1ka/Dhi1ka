<template>
  <v-footer
    color="black"
    height="100"
  >
    <div id="home">
      <router-link to="/"><img src="../assets/home.jpg" width="50" class="rounded-circle"></router-link>
    </div>
    <v-spacer></v-spacer>
    <div id="footer" class="pl-12">
      <a href="https://www.facebook.com/dhika.assassin">
        <v-icon
          size="24"
          color="white"
        >
          mdi-facebook
        </v-icon>
      </a>
      <a href="https://www.linkedin.com/in/dhika-wicaksana-8b6a96194">
        <v-icon
          size="24"
          color="white"
        >
          mdi-linkedin
        </v-icon>
      </a>
      <a href="https://twitter.com/dhika_knight04">
        <v-icon
          size="24"
          color="white"
        >
          mdi-twitter
        </v-icon>
      </a>
      <a href="https://www.instagram.com/1wisely1/">
        <v-icon
          size="24"
          color="white"
        >
          mdi-instagram
        </v-icon>
      </a>
    </div>
    <v-spacer></v-spacer>
    <p><small> Copyright &copy; {{ new Date().getFullYear() }} <strong>Dhi1ka</strong>. All Rights Reserved.</small></p>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style>
p small {
  color: #fff;
}

#home a {
  text-decoration: none;
  color: #000;
}

#footer a {
  text-decoration: none;
  color: #000;
  margin-left: 20px;
}
</style>