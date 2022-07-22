<template>
  <v-app-bar app color="#111111" dark flat class="px-8">
    <v-btn icon>
      <v-icon color="#A7121D">mdi-bee</v-icon>
    </v-btn>

    <v-spacer></v-spacer>
    <v-btn text @click="scroll('#home')"> <v-icon>mdi-home-outline</v-icon> Home</v-btn>
       <v-btn text @click="scroll('home')"><v-icon>mdi-account-circle</v-icon> About</v-btn>
       <v-btn text href="#skills" ><v-icon>mdi-cogs</v-icon> skills</v-btn>
    <v-btn text href="#projects"> <v-icon>mdi-folder-outline</v-icon> Projects</v-btn>
     <v-btn text href="#resume"> <v-icon>mdi-book</v-icon> CV</v-btn>
       <v-btn text href="#testimonials"><v-icon>mdi-format-quote-open</v-icon> Testimonials</v-btn>
  <v-btn text @click="scroll('contact')"><v-icon>mdi-phone-outline</v-icon> Contact</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style>
</style>