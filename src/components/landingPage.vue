<template>
  <v-app
    id="home"
    :style="{ background: $vuetify.theme.themes.dark.background }"
  >
    <NavBar />
    <v-container fluid>
      <v-row>
        <v-col cols="6">
           <v-img
                    src="https://i.postimg.cc/ZK6Ghm4z/Amanda-2.jpg"
                    contain
                    max-height="500"
                  ></v-img>
        </v-col>
        <v-col cols="6">
          <h5 class="red--text text--darken-4 top">Hello Im Amanda</h5>
          <h1 class="white--text">Aspiring full stack developer</h1>
          <p class="grey--text">
            Hello I'm
                            <span style="color: rgba(172, 8, 8, 0.884)">
                                Amanda Gudlwa
                            </span>
                            I enjoy learning about new technologies. I am passionate about
                            technology, programming and
                            <span style="color: rgba(172, 8, 8, 0.884)">robotics</span>. I
                            had been self teaching for 2 years before I joined Life
                            Choices.Through my studies at Life Choices Academy, I have
                            gotten exposure into the field of
                            <span style="color: rgba(172, 8, 8, 0.884)">web development</span>. <br />
          </p>
          <v-btn tile color="#A7121D" dark> about me </v-btn>
        </v-col>
        <!-- end of what i waanna use -->
        
        <!-- up to here -->
      

      </v-row>
  
    </v-container>
  
  </v-app>
</template>

<script>
import NavBar from './NavBar.vue';

export default {
    name: "Home",
    data: () => ({
        icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    }),
    components: { NavBar }
};
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