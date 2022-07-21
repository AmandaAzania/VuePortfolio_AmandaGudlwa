<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
    <skills/>
    <testimonials/> 
    <contact/>
    <Footer/>
  </v-app>
 
</template>

<script>
import testimonials from'./components/testimonials.vue';
import contact from './components/contact.vue'
import Footer from './components/Footer.vue'
import skills from './components/skills.vue'
export default {
  components: {testimonials, contact,Footer, skills},
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
