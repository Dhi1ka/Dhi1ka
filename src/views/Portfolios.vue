<template>
  <v-container>
    <h1>Portfolios</h1>
    <v-row>
      <v-col>
        <v-img src="../assets/css-old-new.png" width="500"></v-img>
      </v-col>
      <v-col>
        <v-img src="../assets/logo-brand-landscape.png" width="500"></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-img src="../assets/minisite-css.png" width="400"></v-img>
      </v-col>
      <v-col>
        <v-img src="../assets/WebArsip.png" width="550"></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-img src="../assets/web-compro.png" width="550"></v-img>
      </v-col>
      <v-col>
        <v-img src="../assets/_bold-subs.png" width="550"></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-img src="../assets/_bold-upsell.png" width="550"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Portfolio',
  components: {},
  created () {
    document.title = 'Portfolios | Dhi1ka — ID'
  }
}
</script>

<style>

</style>