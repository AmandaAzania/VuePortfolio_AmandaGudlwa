<template>
  <v-app
    id="home"
    :style="{ background: $vuetify.theme.themes.dark.background }"
  >
    <nav-bar />
    <v-container fluid>
      <v-row>
     
  



        <!-- kjahsldhalsdhas -->

        <!-- testimonials -->



        <!-- end of testimonials -->

        <div class="first" id="project">
          <v-row>
            <v-col cols="12">
              <div class="child bgColor1">
                <v-icon color="#A7121D" x-large class="ml-3"
                  >mdi-palette-swatch</v-icon
                >
                <h3 class="white--text ml-3 mt-4">stuff</h3>
                <p class="grey--text ml-3 mt-6">
                  Lorem, ipsum dolor sit amet <br />consectetur adipisicing
                  elit.
                </p>
                <v-btn color="#A7121D" dark text>
                  know more
                  <v-icon right>mdi-arrow-right</v-icon>
                </v-btn>
              </div>
              <div class="child bgColor2">
                <v-icon color="" x-large class="ml-3" dark>mdi-shopping</v-icon>
                <h3 class="white--text ml-3 mt-4">other things</h3>
                <p class="grey--text ml-3 mt-6">
                  Lorem, ipsum dolor sit amet <br />consectetur adipisicing
                  elit.
                </p>
                <v-btn color="" dark text>
                  know more
                  <v-icon right>mdi-arrow-right</v-icon>
                </v-btn>
              </div>
              <div class="child bgColor1">
                <v-icon color="#A7121D" x-large class="ml-3"
                  >mdi-book-open-page-variant</v-icon
                >
                <h3 class="white--text ml-3 mt-4">something</h3>
                <p class="grey--text ml-3 mt-6">
                  Lorem, ipsum dolor sit amet <br />consectetur adipisicing
                  elit.
                </p>
                <v-btn color="#A7121D" dark text>
                  know more
                  <v-icon right>mdi-arrow-right</v-icon>
                </v-btn>
              </div>
            </v-col>
            <v-col cols="12" class="mt-10">
              <div class="child1">
                <h1 class="red--text text--darken-4 mt-4 number">6 months</h1>
                <h3 class="white--text mt-4">Experience</h3>
              </div>
              <div class="child2 mRight">
                <v-row>
                  <v-col cols="12" class="childcol">
                    <div class="child2 mButton padding bgColor1">
                      <h1 class="red--text text--darken-4">2</h1>
                      <p class="grey--text">group projects</p>
                    </div>
                  </v-col>
                  <v-col cols="12" class="childcol">
                    <div class="child2 padding bgColor1">
                      <h1 class="red--text text--darken-4">12+</h1>
                      <p class="grey--text">Completed Projects</p>
                    </div>
                  </v-col>
                </v-row>

              </div>
              <div class="child2">
                <v-row>
                  <v-col cols="12" class="childcol">
                    <div class="child2 mButton padding bgColor1">
                      <h1 class="red--text text--darken-4">1</h1>
                      <p class="grey--text">Years Experience</p>
                    </div>
                  </v-col>
                  <v-col cols="12" class="childcol">
                    <div class="child2 padding bgColor1">
                      <h1 class="red--text text--darken-4">1</h1>
                      <p class="grey--text">Achievements</p>
                    </div>
                  </v-col>
                </v-row>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-row>



      <br> <br>
      <v-col md="3" offset-md="3" id="projects">
        <h4 class="white--text">PROJECTS</h4>
        <p class="grey--text">Lorem ipsum dolor Lorem ipsum dolor</p>
      </v-col>
      <v-col md="3" class="text-end">
        <v-btn tile color="#A7121D" dark> View All </v-btn>
      </v-col>
      <v-col md="3" offset-md="3">
        <v-card class="pa-2 py-12" outlined tile height="250px" color="#1E1E1E">
          <v-img src="3.png" contain max-height=""></v-img>
        </v-card>
      </v-col>
      <v-col md="3">
        <v-card class="pa-2 py-12" outlined tile height="250px" color="#1E1E1E">
          <v-img src="2.png" contain max-height=""></v-img>
        </v-card>
      </v-col>
      <v-col md="3" offset-md="3">
        <v-btn color="white" dark text class="ml-n4"> stuff </v-btn><br />

        <v-btn color="#A7121D" dark text class="ml-n4">
          know more
          <v-icon right>mdi-arrow-right</v-icon>
        </v-btn>
      </v-col>
      <v-col md="3">
        <v-btn color="white" dark text class="ml-n4"> more stuff </v-btn><br />

        <v-btn color="#A7121D" dark text class="ml-n4">
          know more
          <v-icon right>mdi-arrow-right</v-icon>
        </v-btn>
      </v-col>
      <v-col md="3" offset-md="3">
        <v-card class="pa-2 py-12" outlined tile height="250px" color="#1E1E1E">
          <v-img src="4.png" contain max-height=""></v-img>
        </v-card>
      </v-col>
      <v-col md="3">
        <v-card class="pa-2 py-12" outlined tile height="250px" color="#1E1E1E">
          <v-img src="5.png" contain max-height=""></v-img>
        </v-card>
      </v-col>
      <v-col md="3" offset-md="3">
        <v-btn color="white" dark text class="ml-n4"> thingssss </v-btn><br />

        <v-btn color="#A7121D" dark text class="ml-n4">
          know more
          <v-icon right>mdi-arrow-right</v-icon>
        </v-btn>
      </v-col>
      <v-col md="3">
        <v-btn color="white" dark text class="ml-n4"> thing </v-btn><br />
        <v-btn color="#A7121D" dark text class="ml-n4">
          know more
          <v-icon right>mdi-arrow-right</v-icon>
        </v-btn>
      </v-col>
      
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
};



</script>
<style scoped>
.margin {
  margin-left: -100px;
}
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

.contact {
  text-align: right;
  color: #a7121d;
  margin-top: 3px;
}

/* skills */


</style>