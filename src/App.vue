<template>
  <div class="container">
    <div class="background-color"></div>
    <a href="link-to-another-page" class="button">START SESSION</a>  <!-- This is link to second page-->
    <h1>
      <span class="blue-text">Rescue</span>
      <span class="white-text">Link</span>
    </h1>
  </div>
</template>

<script setup>
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Inria+Sans:wght@700&display=swap');


.container h1 {
  position: absolute;
  font-family: 'Inria Sans', sans-serif;
  width: 100%;
  z-index: 2; /* Above the background */
  background-color: black;
  text-align: center;
  line-height: 42px;
  font-size: 20px;
  color: white; /* Added for visibility */
  margin-bottom: -5%;
  top: 0;
  
}
.background-color { 
  background-color: #122932;
  position: absolute; /* Positioning relative to the container */
  top: 0;
  left: 0;
  width: 100%; /* Full width of the container */
  height: 100%; /* Full height of the container */
  z-index: 1; /* Ensure it's below the content */
}

.button {
  width: 502px;
  height: 141px;
  border-radius: 5px;
  background: #18B758;
  box-shadow: 7px 6px 4px 0px rgba(0, 0, 0, 0.25);
  color: #FFF;
  font-family: 'Inria Sans', sans-serif;
  font-size: 64px;
  font-weight: 700;
  line-height: 141px; /* Vertically centers text in the button */
  text-align: center;
  text-decoration: none; /* Removes underline from link */
  z-index: 3; /* Adjusted for visibility */
  margin-left: 37.5%;
  margin-top: 22.5%;
  
}

.blue-text {
  color: #355185;
}

.white-text {
  color: #FFF;
}
</style>
