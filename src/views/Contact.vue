<template>
  <v-container
    class="mb-4"
  >
    <h1>Contact Me Here</h1>
    <p>Contact me directly: <a href="tel:+628977903145">+62-897-7903-145</a></p>
    <p>Contact email: <a href="mailto:daw.knight04@gmail.com">daw.knight04@gmail.com</a></p>
    <v-row>
      <v-col
        cols="12"
        md="5"
      >
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-text-field
            v-model="name"
            :rules="nameRules"
            :counter="10"
            label="Your Name"
            required
          >
          </v-text-field>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            :counter="20"
            label="Your Email"
            required
          >
          </v-text-field>
          <v-text-field
            v-model="subject"
            :rules="subjectRules"
            :counter="50"
            label="Write a Subject"
          >
          </v-text-field>
          <v-textarea
            v-model="textarea"
            :rules="textareaRules"
            name="input-7-4"
            label="Your Message"
          >
          </v-textarea>
          <v-btn
            elevation="8"
            rounded
            large
            color="error"
            :disabled="!valid"
            @click="validate"
          >
            SUBMIT NOW
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Contact',
  components: {},
  created () {
    document.title = 'Contact | Dhi1ka — ID'
  },
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ],
    email: "",
    emailRules: [
      v => !!v || 'Email is required',
      v => /.+@.+\..+/.test(v) || 'Email is invalid'
    ],
    subject: "",
    textarea: ""
  }),

  methods: {
    validate () {
      this.$refs.form.validate();
    }
  }
}
</script>

<style>

</style>