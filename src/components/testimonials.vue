<template>
  <div class="team" id="testimonials">
    <h1 class="subheading grey--text text-center">testimonials</h1>
    <v-container my-5>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in people" :key="person.name">
          <v-card flat class="text-xs-center ma-3">
            <!-- <v-responsive class="pt-4">
              </v-responsive> -->
              <div class="pt-4">
                <img :src="person.image" alt=""/>
              </div>
            
            <v-card-text>
              <div class="grey--text">
                {{ person.testimony }}
              </div>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">
                {{ person.role }}
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      people: [
        {
          name: "Joel Mukanya",
          role: "Lecturer",
          testimony:
            "Amanda Gudlwa,is a well behave and a professional young lady, who knowshow to prioritize her tasks and met the deadline set on aproject.It is alwasys interesting to have Amanda in my class. you will not regret hiring her as a fullstack developer.",
            image:'https://i.postimg.cc/1Xqq4J2C/joel2.jpg'
        },
        {
          name: "Emile Van Wyk",
          role: "Developer",
          testimony:
            "Amanda Gudlwa, a passionate and driven invidualwith the tenaciousness for success she is fun loving person but knows when to be serious, she isknown for being a calm and collected person especially in stressful situations which makes her ideal for any team especially in roles of leadership.",
            image: 'https://i.postimg.cc/HLJWwGJs/Emile.jpg'
            
        },
        {
          name: "Joshe Jade Theys",
          role: "Developer",
          testimony:
            " Amanda is a talented individual who is alwa ready to assist her colleagues. She is patientduring group projects as she guides those who not understand certain concepts. She has an incredible wealth of knowledge regarding coding and her dedication to improving her craft is admirable.",
            image: 'https://i.postimg.cc/HWQ8yHmY/Copy-of-Joshe-Jade-1.jpg'
        },
        {
          name: "Bulelani Sikhikhi",
          role: "Developer",
          testimony:
            "Amanda Gudlwa, a passionate and driven invi with the tenaciousness for success she is fuloving person but knows when to be serious,  she isknown for being a calm and collected person especially in stressful situations which makes h ideal for any team especially in roles ofleadership",
            image: 'https://i.postimg.cc/LmVkWtr9/Bulelani-1.jpg'
        },
        {
          name: "Sibpongile Rwayi",
          role: "Developer",
          testimony:
            " I have known Amanda Gudlwa since HigH School. She has always been a good student. She always had a hand up in class, to either answer a question or to ask a question. The teachers found her to be a pleasure to teach.",
            image: 'https://i.postimg.cc/hvbJW8sz/Sibongile-2.jpg'
        },
        {
          name: "Joshua Solomons",
          role: "Developer",
          testimony:
            "Amanda Gudlwa is a funny individual who is easy to be around. She has an easy energy. She knows how to make time for everything. When it is time to work, she  works, when it is time to have fun she is always down for a good time",
            image: 'https://i.postimg.cc/tgcPM4TK/Snapchat-1887559217.jpg'
        },
      ],
    };
  },
};
</script>
