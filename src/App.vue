<template>
<Navbar/>
  <div class="content">

    <router-view/>
  </div>
  
</template>

<script>
import Navbar from './components/Navbar.vue'
import './assets/tailwind.css'

export default {
  components: { Navbar }
}

</script>


<style>

</style>
