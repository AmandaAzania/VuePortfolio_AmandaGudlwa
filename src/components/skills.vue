<template>



  <div class="box container" id="skills">

    <div class="row">
        <div class="col-md-6">

    <h1>Technologies I worked with:</h1>
   
    <ul v-for="skill in skills" :key="skill.lang">
      <li>
        <div class="lang">{{ skill.lang }}</div>
        <div class="bar">
          <div
            class="progress"
            v-bind:style="{
              background: skill.color,
              width: skill.percent + '%',
            }"
          ></div>
          <span class="percent">{{ skill.percent }}%</span>
        </div>
      </li>
    </ul>
    </div>
  </div>
  </div>
</template>

<script>
    export default {
  computed: {
    skills() {
      return this.$store.state.skills;
    },
  },
};
</script>

<style>
body {
  font-family: sans-serif;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.box {
  width: 800px;
  padding: 40px;
  margin: 50px auto;
  background: #f3f3f3;
  box-shadow: 3px 3px 10px 3px rgba(0, 0, 0, 0.1);
}

ul li {
  list-style-type: none;
  padding: 10px;
}

.lang {
  margin: 5px;
  font-size: 20px;
}

.bar {
  width: 100%;
  background: #dfdfdf;
  overflow: hidden;
  padding: 5px;
}

.progress {
  float: left;
  padding: 15px;
}

.percent {
  float: right;
  font-weight: 600;
  height: 30px;
  line-height: 30px;
}
</style>
