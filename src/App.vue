<template>
  <v-app>
   <NavBar/>
      <landingPage/>
    <skills/>
    <projects/>
    <resume/>
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
import resume from './components/resume.vue'
import landingPage from './components/landingPage.vue'
import NavBar from './components/NavBar.vue';
import projects from './components/projects.vue'

export default {
  components: { testimonials, contact, Footer, skills, resume, landingPage, NavBar, projects },
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
