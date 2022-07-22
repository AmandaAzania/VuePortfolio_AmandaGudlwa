<template>
<div class="container">
  
  <h1 class="text-center">Resume</h1>
  <h4 class="text-center" style="color: rgba(172, 8, 8, 0.884)">Work experience</h4>
  <div class="content">
    
    <div class="lin">
    
      <div class="box1 b-1">
        <span id='b-1-s' > 2017 - 2018</span>
        <h4> Shop asssistant  </h4>
        <p>Don Pedroo Fisheries</p>
      </div>
    
      <div class="box1 b-2">
        <span id='b-2-s'>2018 - 2019</span>
        <h4>Call centre agent</h4>
        <p>Webhelp</p>
      </div>
    
      <div class="box1 b-3">
        <span id='b-1-s'>2020</span>
        <h4>Baby sitter</h4>
        <p>Nandipha Madotyeni</p>
      </div>
    </div>
  </div>
  
<h4 class="text-center" style="color: rgba(172, 8, 8, 0.884)">Education</h4>

  <div class="content">
    
    <div class="lin">
    
      <div class="box1 b-1">
        <span id='b-1-s'> 2019</span>
        <h4> Matric  </h4>
        <p>Esangweni S.S.S</p>
      </div>
    
      <div class="box1 b-2">
        <span id='b-2-s'>2020</span>
        <h4>ICT</h4>
        <p>Cape Peninsula University of Technology</p>
      </div>
    
      <div class="box1 b-3">
        <span id='b-1-s'>2022</span>
        <h4>Web development</h4>
        <p>Life Choices Coding Academy</p>
      </div>
    </div>
  </div>
</div>


</template>

<style>





.lin{
  width:1px;
  height:100vh;
  background: #6B7275;
  position:relative;
  margin:auto;
}
 

.box1{
 
  
  width: 200px;
  background: #ddd;
  margin-bottom: 10px;
  border-radius:5px;
  padding: 10px;
}


.b-1{
  position: absolute;
  top:100px;
  left:-250px;
}

.b-1::after{
  content:'';
  width:20px;
  height:20px;
  background:#800000;
  border-radius:50%;
  
  
  position:absolute;
  top:0;
  right:-62px;
}

 


.b-2{
  position: absolute;
  top:250px;
  left:50px;
}

.b-2::after{
  content:'';
  width:20px;
  height:20px;
  background: #800000;
  border-radius:50%;
  
  
  position:absolute;
  top:0;
  left:-59px;
}

.b-3{
  position: absolute;
  top:400px;
  left:-250px;
}

.b-3::after{
  content:'';
  width:20px;
  height:20px;
  background:#800000;
  border-radius:50%;
  
  
  position:absolute;
  top:0;
  right:-62px;
}


#b-1-s{
  position: absolute;
  right: -152px;
  top:0;
  font-size:20px;
  font-weight:bold;
  
}


#b-2-s{
  position: absolute;
  left: -152px;
  top:0;
  font-size:20px;
  font-weight:bold;
  
}

@media (max-width: 600px){
  .b-2{
      top:250px;
  }
  
.b-1, .b-3{
  position: absolute;
  left:50px;
}
  
  .b-1::after, .b-3::after{
      left:-59px;
  }
  
  #b-1-s, #b-2-s{
  left: 0px;
  top:-30px; 
}
  


}



</style>