<template>
  <v-app
    id="projects"
    :style="{ background: $vuetify.theme.themes.dark.background }"
  >
    <nav-bar />
    <v-container fluid>
      <v-row>
        <!-- save everything after this line -->
        <v-col md="3" offset-md="3" id="about">
          <h4 class="white--text">FEATURED PROJECTS</h4>
          <p class="grey--text">Some of the projects I worked on at the Academy </p>
        </v-col>
        <v-col md="3" class="text-end">
         
        </v-col>
        <v-col md="3" offset-md="3">
          <v-card
            class="pa-2 py-12"
            outlined
            tile
            height="250px"
            color="#1E1E1E"
          >
            <v-img src="PropertyListing.png" contain max-height=""></v-img>
          </v-card>
        </v-col>
        <!-- start -->
        <v-col md="3">
          <v-card
            class="pa-2 py-12"
            outlined
            tile
            height="250px"
            color="#1E1E1E"
          >
            <v-img src="ToDoApp.png" contain max-height=""></v-img>
          </v-card>
        </v-col>
        <v-col md="3" offset-md="3">
          <v-btn color="white" dark text class="ml-n4"> property listing </v-btn
          ><br />

          <v-btn color="#A7121D" dark text class="ml-n4">
            <a href="https://github.com/AmandaAzania/realEstate"><v-icon>mdi-github</v-icon></a>
          </v-btn>
              <v-btn color="#A7121D" dark text class="ml-n4">
            <a href="https://coruscating-taffy-000d9a.netlify.app"><v-icon>mdi-web</v-icon></a>
          </v-btn>
        </v-col>
        <!-- end -->
        
        <v-col md="3">
          <v-btn color="white" dark text class="ml-n4"> To do app </v-btn><br />

           <v-btn color="#A7121D" dark text class="ml-n4">
            <a href="https://github.com/AmandaAzania/ToDoApp"><v-icon>mdi-github</v-icon></a>
          </v-btn>
              <v-btn color="#A7121D" dark text class="ml-n4">
            <a href="https://shimmering-cranachan-fd906b.netlify.app"><v-icon>mdi-web</v-icon></a>
          </v-btn>
        </v-col>
        <v-col md="3" offset-md="3">
          <v-card
            class="pa-2 py-12"
            outlined
            tile
            height="250px"
            color="#1E1E1E"
          >
            <v-img src="interestCalculator.png" contain max-height=""></v-img>
          </v-card>
        </v-col>
        <v-col md="3">
          <v-card
            class="pa-2 py-12"
            outlined
            tile
            height="250px"
            color="#1E1E1E"
          >
            <v-img src="areaCalculator.png" contain max-height=""></v-img>
          </v-card>
        </v-col>
        <v-col md="3" offset-md="3">
          <v-btn color="white" dark text class="ml-n4"> interest calculator </v-btn
          ><br />
     <v-btn color="#A7121D" dark text class="ml-n4">
            <a href="https://github.com/AmandaAzania/countingInterest"><v-icon>mdi-github</v-icon></a>
          </v-btn>
              <v-btn color="#A7121D" dark text class="ml-n4">
            <a href="https://meek-chaja-8015d5.netlify.app"><v-icon>mdi-web</v-icon></a>
          </v-btn>
        </v-col>
        <v-col md="3">
          <v-btn color="white" dark text class="ml-n4"> Area Calculator </v-btn><br />
           <v-btn color="#A7121D" dark text class="ml-n4">
            <a href="https://github.com/AmandaAzania/areaOfTriangle"><v-icon>mdi-github</v-icon></a>
          </v-btn>
              <v-btn color="#A7121D" dark text class="ml-n4">
            <a href="https://gorgeous-llama-36d5d9.netlify.app"><v-icon>mdi-web</v-icon></a>
          </v-btn>
        </v-col>
        
        <!-- sdsadas -->

        <v-col md="3" offset-md="3">
          <v-card
            class="pa-2 py-12"
            outlined
            tile
            height="250px"
            color="#1E1E1E"
          >
            <v-img src="AgeToDays.png" contain max-height=""></v-img>
          </v-card>
        </v-col>
        <v-col md="3">
          <v-card
            class="pa-2 py-12"
            outlined
            tile
            height="250px"
            color="#1E1E1E"
          >
            <v-img src="BMIcalculator.png" contain max-height=""></v-img>
          </v-card>
        </v-col>
        <v-col md="3" offset-md="3">
          <v-btn color="white" dark text class="ml-n4"> Age to Days </v-btn
          ><br />

        <v-btn color="white" dark text class="ml-n4"> Area Calculator </v-btn><br />
           <v-btn color="#A7121D" dark text class="ml-n4">
            <a href="https://github.com/AmandaAzania/areaOfTriangle"><v-icon>mdi-github</v-icon></a>
          </v-btn>
              <v-btn color="#A7121D" dark text class="ml-n4">
            <a href="https://gorgeous-llama-36d5d9.netlify.app"><v-icon>mdi-web</v-icon></a>
          </v-btn>
        </v-col>
        <v-col md="3">
          <v-btn color="white" dark text class="ml-n4"> BMI calculator </v-btn><br />
          <v-btn color="#A7121D" dark text class="ml-n4">
            <a href="https://github.com/AmandaAzania/BMIcalculator"><v-icon>mdi-github</v-icon></a>
          </v-btn>
              <v-btn color="#A7121D" dark text class="ml-n4">
            <a href="https://deluxe-semifreddo-ad2400.netlify.app/"><v-icon>mdi-web</v-icon></a>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

  </v-app>
</template>

<script>
import NavBar from "../components/NavBar.vue";
export default {
  name: "Home",
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
  components: {
    NavBar,

  },


}
</script>
<style scoped>
.top {
  margin-top: 180px;
}
.topInverse {
  margin-top: -250px;
}
.topTolbar {
  margin-top: 100px;
  text-align: center;
}
.first {
  width: 100%;
  height: 610px;
  background: linear-gradient(
    to right,
    #181818,
    #181818 50%,
    #111111 50%,
    #111111 50%
  );
  text-align: center;
  padding: 2rem 2rem;
}
.second {
  width: 100%;
  height: 400px;
  background: #181818;
  text-align: center;
  padding: 2rem 2rem;
}
.secondchild1 {
  display: inline-block;
  background-color: #1e1e1e;
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: left;
  margin-top: 250px;
}
.child {
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: left;
  margin-right: 8px;
}
.bgColor1 {
  background-color: #1e1e1e;
}
.bgColor2 {
  background-color: #ce1d2a;
}
.child1 {
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  margin-right: 5px;
  width: 240px;
}
.child2 {
  display: inline-block;
  width: 245px;
  vertical-align: middle;
}
.mRight {
  margin-right: 8px;
}
.mButton {
  margin-bottom: 8px;
}
.padding {
  padding: 8px 0;
}
.col-12.padd {
  padding: 12px 0 !important;
}
.col-12.childcol {
  padding: 0 !important;
}
h1.number {
  font-size: 50px;
  font-weight: bold;
}
</style>