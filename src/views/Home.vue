<template>
  <v-app
    id="home"
    :style="{ background: $vuetify.theme.themes.dark.background }"
  >
    <nav-bar />
    <v-container fluid>
      <v-row>
        <v-col cols="6">
          <v-layout>
            <v-flex>
              <v-card style="z-index: 100" class="py-5">
                <v-responsive pt-4>
                  <v-img
                    src="https://i.postimg.cc/ZK6Ghm4z/Amanda-2.jpg"
                    contain
                    max-height="500"
                  ></v-img>
                </v-responsive>
                <v-card-text>
                  <div>
                    <h1 class="text-center">Amanda Gudlwa</h1>
                  </div>

                  <div>
                    <span style="color: rgba(172, 8, 8, 0.884)" ><h5 class="text-center" >Aspiring fullstack developer</h5></span>
                  </div>

                  <div class="text-center">
                    <v-icon>mdi-facebook</v-icon>
                    <v-icon>mdi-instagram</v-icon>
                    <v-icon>mdi-github</v-icon>
                    <v-icon>mdi-linkedin</v-icon>
                  </div>

                  <div style="text-align: right">
                    <v-btn >Contact Me</v-btn>
                  </div>

                      <div style="text-align: left ">
                    <v-btn style="position:relative; left:10px; top:-35px; ">Download CV</v-btn>
                  </div>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-col>
        <v-col cols="6">
          <v-layout>
            <v-flex>
              <v-card class="mx-n7 px-5 py-5 my-16" style="z-index: 1">
                <h5 class="red--text text--darken-4 top">Hello I'm Amanda</h5>
                <h1 class="white--text">Aspiring Full stack developer</h1>
                <p class="grey--text">
                  I enjoy learning about new technologies. I am passionate about
                  technology, programming and
                  <span style="color: rgba(172, 8, 8, 0.884)">robotics</span>. I
                  had been self teaching for 2 years before I joined Life
                  Choices.Through my studies at Life Choices Academy, I have
                  gotten exposure into the field of
                  <span style="color: rgba(172, 8, 8, 0.884)"
                    >web development</span
                  >. <br />
                </p>
                <v-btn >About Me</v-btn>
              </v-card>
            </v-flex>
          </v-layout>
        </v-col>



  <!-- gfkasljf;alsjfalskjf -->

  <div class="skill-set container">
           
            <div class="content content--mlarge skill-set__flex">
              <ul class="skill-set__list">
                <li class="skill-set__item">
                  <div class="skill-set__icon"><img src="http://www.webcoderskull.com/img/icon/ai.svg" alt="Illustrator"></div>
                  <div class="skill-set__detail">
                    <div class="skill-set__meta">
                      <div class="skill-set__name">
                        <h4 class="small-title small-title--skill">Illustrator</h4>
                        <p class="skill-set__year">3YEARS</p>
                      </div>
                      <p class="small-title small-title--skill skill-set__high">90<span class="skill-set__ratio">%</span></p>
                    </div>
                    <div class="skill-set__bar p90 js-scroll in"></div>
                  </div>
                </li>
                <li class="skill-set__item">
                  <div class="skill-set__icon"><img src="http://www.webcoderskull.com/img/icon/sketch.svg" alt="Sketch"></div>
                  <div class="skill-set__detail">
                    <div class="skill-set__meta">
                      <div class="skill-set__name">
                        <h4 class="small-title small-title--skill">Sketch</h4>
                        <p class="skill-set__year">1YEARS</p>
                      </div>
                      <p class="small-title small-title--skill">80<span class="skill-set__ratio">%</span></p>
                    </div>
                    <div class="skill-set__bar p80 js-scroll in"></div>
                  </div>
                </li>
                <li class="skill-set__item">
                  <div class="skill-set__icon"><img src="http://www.webcoderskull.com/img/icon/abstract.svg" alt="Abstract"></div>
                  <div class="skill-set__detail">
                    <div class="skill-set__meta">
                      <div class="skill-set__name">
                        <h4 class="small-title small-title--skill">Abstract</h4>
                        <p class="skill-set__year">HALF A YEAR</p>
                      </div>
                      <p class="small-title small-title--skill">80<span class="skill-set__ratio">%</span></p>
                    </div>
                    <div class="skill-set__bar p80 js-scroll in"></div>
                  </div>
                </li>
                <li class="skill-set__item">
                  <div class="skill-set__icon"><img src="http://www.webcoderskull.com/img/icon/ps.svg" alt="Photoshop"></div>
                  <div class="skill-set__detail">
                    <div class="skill-set__meta">
                      <div class="skill-set__name">
                        <h4 class="small-title small-title--skill">Photoshop</h4>
                        <p class="skill-set__year">3YEARS</p>
                      </div>
                      <p class="small-title small-title--skill">70<span class="skill-set__ratio">%</span></p>
                    </div>
                    <div class="skill-set__bar p70 js-scroll in"></div>
                  </div>
                </li>
                <li class="skill-set__item">
                  <div class="skill-set__icon"><img src="http://www.webcoderskull.com/img/icon/flinto.png" alt="Flinto for mac"></div>
                  <div class="skill-set__detail">
                    <div class="skill-set__meta">
                      <div class="skill-set__name">
                        <h4 class="small-title small-title--skill">Flinto for mac</h4>
                        <p class="skill-set__year">2MONTHS</p>
                      </div>
                      <p class="small-title small-title--skill">50<span class="skill-set__ratio">%</span></p>
                    </div>
                    <div class="skill-set__bar p50 js-scroll in"></div>
                  </div>
                </li>
              </ul>
              <ul class="skill-set__list">
                <li class="skill-set__item">
                  <div class="skill-set__icon"><img src="http://www.webcoderskull.com/img/icon/html.svg" alt="HTML/CSS"></div>
                  <div class="skill-set__detail">
                    <div class="skill-set__meta">
                      <div class="skill-set__name">
                        <h4 class="small-title small-title--skill">HTML/CSS</h4>
                        <p class="skill-set__year">2YEARS</p>
                      </div>
                      <p class="small-title small-title--skill skill-set__high">90<span class="skill-set__ratio">%</span></p>
                    </div>
                    <div class="skill-set__bar p90 js-scroll in"></div>
                  </div>
                </li>
                <li class="skill-set__item">
                  <div class="skill-set__icon"><img src="http://www.webcoderskull.com/img/icon/pug.svg" alt="Pug"></div>
                  <div class="skill-set__detail">
                    <div class="skill-set__meta">
                      <div class="skill-set__name">
                        <h4 class="small-title small-title--skill">Pug</h4>
                        <p class="skill-set__year">3MONTHS</p>
                      </div>
                      <p class="small-title small-title--skill">80<span class="skill-set__ratio">%</span></p>
                    </div>
                    <div class="skill-set__bar p80 js-scroll in"></div>
                  </div>
                </li>
                <li class="skill-set__item">
                  <div class="skill-set__icon"><img src="http://www.webcoderskull.com/img/icon/wp.svg" alt="Wordpress"></div>
                  <div class="skill-set__detail">
                    <div class="skill-set__meta">
                      <div class="skill-set__name">
                        <h4 class="small-title small-title--skill">Wordpress</h4>
                        <p class="skill-set__year">1YEARS</p>
                      </div>
                      <p class="small-title small-title--skill">70<span class="skill-set__ratio">%</span></p>
                    </div>
                    <div class="skill-set__bar p70 js-scroll in"></div>
                  </div>
                </li>
                <li class="skill-set__item">
                  <div class="skill-set__icon"><img src="http://www.webcoderskull.com/img/icon/sass.svg" alt="Sass"></div>
                  <div class="skill-set__detail">
                    <div class="skill-set__meta">
                      <div class="skill-set__name">
                        <h4 class="small-title small-title--skill">Sass</h4>
                        <p class="skill-set__year">1YEARS</p>
                      </div>
                      <p class="small-title small-title--skill">70<span class="skill-set__ratio">%</span></p>
                    </div>
                    <div class="skill-set__bar p70 js-scroll in"></div>
                  </div>
                </li>
                <li class="skill-set__item">
                  <div class="skill-set__icon"><img src="http://www.webcoderskull.com/img/icon/js.svg" alt="Javascript"></div>
                  <div class="skill-set__detail">
                    <div class="skill-set__meta">
                      <div class="skill-set__name">
                        <h4 class="small-title small-title--skill">Javascript</h4>
                        <p class="skill-set__year">1YEARS</p>
                      </div>
                      <p class="small-title small-title--skill">60<span class="skill-set__ratio">%</span></p>
                    </div>
                    <div class="skill-set__bar p60 js-scroll in"></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

  <!-- jGkJHlKHZKXKLZ -->
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
                  <v-icon color="" x-large class="ml-3" dark
                    >mdi-shopping</v-icon
                  >
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
        <v-col md="3" offset-md="3" id="projects">
          <h4 class="white--text">PROJECTS</h4>
          <p class="grey--text">Lorem ipsum dolor Lorem ipsum dolor</p>
        </v-col>
        <v-col md="3" class="text-end">
          <v-btn tile color="#A7121D" dark> View All </v-btn>
        </v-col>
        <v-col md="3" offset-md="3">
          <v-card
            class="pa-2 py-12"
            outlined
            tile
            height="250px"
            color="#1E1E1E"
          >
            <v-img src="3.png" contain max-height=""></v-img>
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
          <v-btn color="white" dark text class="ml-n4"> more stuff </v-btn
          ><br />

          <v-btn color="#A7121D" dark text class="ml-n4">
            know more
            <v-icon right>mdi-arrow-right</v-icon>
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
            <v-img src="4.png" contain max-height=""></v-img>
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
        <v-col cols="12" class="padd topInverse">
          <div class="second">
            <div class="secondchild1" id="contact">
              <v-row>
                <v-col cols="7">
                  <h1 class="white--text">
                    Let's work together on<br />your next project
                  </h1>
                  <p class="grey--text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eius nesciunt ducimus natus <br />
                  </p>
                </v-col>
                <v-col cols="5">
                    <v-btn >Contact Me</v-btn>
                </v-col>
              </v-row>
            </div>
          </div>
          <v-toolbar class="topTolbar" color="#111111" dark flat>
            <div
              style="
                position: absolute;
                margin-left: auto;
                margin-right: auto;
                left: 0;
                right: 0;
                text-align: center;
              "
            >
              <v-btn text>Home</v-btn>
              <v-btn text>Project</v-btn>
              <v-btn text>about</v-btn>
              <v-btn text> contact</v-btn>
            </div>
          </v-toolbar>
        </v-col>
     
    </v-container>
    <Footer />
  </v-app>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
  components: {
    NavBar,
    Footer,
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






.skills {
  padding: 10px;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.skill {
  width: 100%;
  margin: 10px 0;
}

.title {
  color: #fff;
  font-weight: 700;
}

.progress-bar {
  background: #404040;
  border-radius: 3px;
  width: 100%;
  height: 15px;
/*   overflow: hidden; */
}


#html .progress {
  max-width: 90%;
  height: 100%;
  background: #ed2828;
  border-radius: 3px;
  position: relative;
  animation: 1s ease 0s 1 loadBars; 
}

#html .progress::after {
  content: "90%";
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  height: 15px;
  width: 30px;
  background: #fff;
  position: absolute;
  padding: 2px 3px;
  border-radius: 4px;
  right: -18px;
  top: -30px;
}

#html .progress::before {
  content: "";
  position: absolute;
  width: 0; 
  height: 0; 
  right: -5px;
  top: -12px;  
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #fff;
}

#css .progress {
  max-width: 70%;
  height: 100%;
  background: #ed2828;
  position: relative;
  animation: 1s ease 0s 1 loadBars; 
}

#css .progress::after {
  content: "70%";
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  height: 15px;
  width: 30px;
  background: #fff;
  position: absolute;
  padding: 2px 3px;
  border-radius: 4px;
  right: -18px;
  top: -30px;
}

#css .progress::before {
  content: "";
  position: absolute;
  width: 0; 
  height: 0; 
  right: -5px;
  top: -12px;  
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #fff;
}

#js .progress {
  max-width: 60%;
  height: 100%;
  background: #ed2828;
  position: relative;
  animation: 1s ease 0s 1 loadBars; 
}

#js .progress::after {
  content: "60%";
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  height: 15px;
  width: 30px;
  background: #fff;
  position: absolute;
  padding: 2px 3px;
  border-radius: 4px;
  right: -18px;
  top: -30px;
}

#js .progress::before {
  content: "";
  position: absolute;
  width: 0; 
  height: 0; 
  right: -5px;
  top: -12px;  
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #fff;
}

@keyframes loadBars{
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
  
}

.skill-set__flex {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.content {
    width: 98%;
    margin: auto;
}

.skill-set__list {
    width: 47%;
}
ol, ul {
    list-style: none;
}

.skill-set__item {
/*     margin-top: 6.4rem; */
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.skill-set__icon {
    width: 10.6382%;
    -ms-flex-item-align: center;
    align-self: center;
}
img {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    width: 100%;
}
.skill-set__detail {
    width: 85.1063%;
}
.skill-set__meta {
    margin-bottom: 0.8rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.skill-set__name {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
}
.small-title {
    font-size: 2.4rem;
    color: #072142;
    letter-spacing: 0.2em;
    line-height: 1.2;
    font-family: "futura_de";
}
.skill-set__year {
    font-size: 1.4rem;
    line-height: 1.2;
    color: #c0c5ca;
    margin-left: 0.8rem;
    letter-spacing: 0.2em;
}
.skill-set__high {
    color: #ff4d5a;
}
.small-title {
    font-size: 2.4rem;
    color: #072142;
    letter-spacing: 0.2em;
    line-height: 1.2;
    font-family: "futura_de";
}
skill-set__ratio {
    font-size: 1.6rem;
    line-height: 1.2;
    color: #072142;
}
.skill-set__bar {
    width: 100%;
    height: 1.4rem;
    background: #fff;
    position: relative;
    border-radius: 10px;
    -webkit-box-shadow: 0 5px 15px 0 rgba(7, 33, 66, 0.15);
    box-shadow: 0 5px 15px 0 rgba(7, 33, 66, 0.15);
}
.skill-set__bar:after {
    -webkit-animation: ratio90 1.5s forwards;
    animation: ratio90 1.5s forwards;
}
.skill-set__bar:after {
    background-image: -webkit-gradient(linear, left top, right top, from(#072142), color-stop(42%, #8c2b7a), to(#ff4d5a));
    background-image: -webkit-linear-gradient(left, #072142, #8c2b7a 42%, #ff4d5a);
    background-image: -o-linear-gradient(left, #072142, #8c2b7a 42%, #ff4d5a);
    background-image: linear-gradient(to right, #072142, #8c2b7a 42%, #ff4d5a);
}

.skill-set__bar:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    border-radius: 10px;
    width: 80%;
}


</style>