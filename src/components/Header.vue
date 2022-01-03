<template>
  <v-app-bar
    app
    flat
    color="white"
    height="100"
    class="px-8"
  >
    <div id="nav" class="d-flex align-center">
      <router-link to="/"><img src="../assets/home.jpg" width="50" class="rounded-circle"></router-link>
      <router-link to="/" id="home">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/portfolios">Portfolios</router-link>
      <router-link to="/skills">Skills</router-link>
    </div>
    <v-spacer></v-spacer>
    <div id="nav-social">
      <a href="https://www.facebook.com/dhika.assassin">
        <v-icon
          size="24"
          color="black"
        >
          mdi-facebook
        </v-icon>
      </a>
      <a href="https://www.linkedin.com/in/dhika-wicaksana-8b6a96194">
        <v-icon
          size="24"
          color="black"
        >
          mdi-linkedin
        </v-icon>
      </a>
      <a href="https://twitter.com/dhika_knight04">
        <v-icon
          size="24"
          color="black"
        >
          mdi-twitter
        </v-icon>
      </a>
      <a href="https://www.instagram.com/1wisely1/">
        <v-icon
          size="24"
          color="black"
        >
          mdi-instagram
        </v-icon>
      </a>
    </div>
    <v-spacer></v-spacer>
    <div id="nav">
      <router-link to="/contact"><v-btn>Contact</v-btn></router-link>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style>
#nav a {
  text-decoration: none;
  color: #000;
  margin-right: 25px;
}

#nav-social a {
  text-decoration: none;
  color: #000;
  margin-left: 20px;
}

@media screen and (max-width: 855px) {
  #nav-social {
    display: none;
  }
}

@media screen and (max-width: 575px) {
  #nav #home {
    display: none;
  }
}
</style>