<template>
  <v-container>
    <h3>Website and Web Apps Developer</h3>
    <h1>DHIKA ASTRI WICAKSANA</h1>
    <p>Hello, my name is Dhika Astri Wicaksana I'm a Website and Web Apps Developer</p>
    <router-view/>
  </v-container>
</template>

<script>

export default {
  name: 'Home',
  components: {},
  created () {
    document.title = 'Home | Dhi1ka — ID'
  }
}
</script>
