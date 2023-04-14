<template>
  <div>
    <div>
      <h1>Animations</h1>
      <hr>
      <button class="btn" @click="show = !show">Alert</button>
    </div>
    <br>
    <transition name="fade">
      <div id="anim" class="alert" v-show="show">
        <h1>This is some info</h1>
      </div>
 
    </transition>
    <transition name="slide" type="animation">
      <div id="anim" class="alert" v-if="show">
        <h1>This is some info</h1>
      </div>
    </transition>
    <transition name="fade" appear >
      <div id="anim" class="alert" v-if="show">
        <h1>This is some info</h1>
      </div> 

    </transition>
  <transition 
  
  enter-active-class="animated bounce"
    leave-active-class="animated shake"

  >
      <div id="anim" class="alert" v-if="show">
        <h1>This is some info</h1>
      </div> 

    </transition>
    <transition name="fade" appear >
      <div id="anim" class="alert" v-if="show">
        <h1>This is some info alert</h1>
      </div> 
      <div id="anim" class="alert" v-if="show">
        <h1>This is some warning alert</h1>
      </div> 
    </transition>

  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  }
}

</script>

<style >
/* for one frame at the begining it is used */
.fade-enter {
  opacity: 0s;
}

/* always add transition in this class */
.fade-enter-active {
  transition: opacity 1s;
  /* opacity: 1; */
}

.fade-leave {}

.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
} 

.slide-enter {
  opacity: 0;
 }

.slide-enter-active {
animation: slide-in 1s ease-out forwards;
transition:  opacity  0.5;
}


.slide-leave {
 
}

.slide-leave-active {
animation: slide-out 1s ease-out forwards;
transition:opacity 3s;
opacity: 0 ;

}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }

  to { 
    transform: translateX(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(20px);
  }
}


#anim {
  background-color: skyblue;
  width: 40%;
  display: flex;
  justify-content: center;
  color: red;
  margin: auto;
  height: 80px;
  margin-top: 60px;
}

#anim h1 {
  padding: 8px;
}</style>