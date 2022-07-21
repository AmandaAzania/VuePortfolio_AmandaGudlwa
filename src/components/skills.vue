<template>
<!-- skills progress bar -->

 	<div class="box">
 		 <ul>
<li v-for="skill in skills">
 		 		<div class="lang">{{skill.lang}}</div>
 				<div class="bar">
 					<div class="progress" v-bind:style = "{'background':skill.color, 'width':skill.percent+'%'}"></div>
 		 			<span class="percent">{{skill.percent}}%</span>
 				</div>
 		 	</li>
 		 </ul>
 	</div>
  </template>


<style>



 *, *::before, *::after {
 margin: 0;
 padding: 0;
box-sizing: border-box;
font-family: Montserrat, sans-serif;
color: #fff;
}
 main {
position: absolute;
 top: 50%;
 left: 50%;
transform: translate(-50%, -50%);
 width: 350px;
}
 h1 {
 color: #292929;
}
 li {
margin: 0.5em 0 0.5em;
border: 0.1em solid #17c537;
 border-radius: 3px;
background: #dffbe4;
list-style: none;
overflow: hidden;
}
 li div {
position: relative;
 height: 1.4em;
background: #6dee85;
 font-size: 1.2em;
}
 li div label:first-child {
position: absolute;
left: 8px;
}
 li div label:last-child {
position: absolute;
right: 8px;
}


</style>