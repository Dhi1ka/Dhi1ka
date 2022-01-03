<template>
  <v-container>
    <h1>Skills</h1>
    <v-row>
      <v-col>
        <h3>JavaScript</h3>
        <v-slider
          v-model="js.val"
          :color="js.color"
          readonly
        ></v-slider>
      </v-col>
      <v-col>
        <h3>HTML/CSS</h3>
        <v-slider
          v-model="html.val"
          :color="html.color"
          readonly
        ></v-slider>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h3>MySQL</h3>
        <v-slider
          v-model="mysql.val"
          :color="mysql.color"
          readonly
        ></v-slider>
      </v-col>
      <v-col>
        <h3>PHP</h3>
        <v-slider
          v-model="php.val"
          :color="php.color"
          readonly
        ></v-slider>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h3>Node.js</h3>
        <v-slider
          v-model="nodejs.val"
          :color="nodejs.color"
          readonly
        ></v-slider>
      </v-col>
      <v-col>
        <h3>Vue.js</h3>
        <v-slider
          v-model="vuejs.val"
          :color="vuejs.color"
          readonly
        ></v-slider>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Skills",
  components: {},
  created () {
    document.title = 'Skills | Dhi1ka — ID'
  },
  data () {
    return {
      js : {
        val: 85,
        color: 'yellow lighten-1'
      },
      html : {
        val: 90,
        color: 'deep-orange darken-1'
      },
      mysql : {
        val: 75,
        color: 'blue darken-2'
      },
      php : {
        val: 80,
        color: 'deep-purple lighten-1'
      },
      nodejs : {
        val: 70,
        color: 'green darken-1'
      },
      vuejs : {
        val: 70,
        color: 'green lighten-1'
      },
    }
  }
}
</script>

<style>

</style>