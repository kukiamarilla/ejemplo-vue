<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <template v-for="donacion in donaciones">
          <Donacion :donacion="donacion" v-bind:key="donacion.id" />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Donacion from "@/components/Donacion.vue";
import donacionService from "@/services/donacionServices";
export default {
  name: "Home",
  data() {
    return {
      donaciones: []
    };
  },
  components: {
    Donacion
  },
  mounted() {
    donacionService.listar().then(response => {
      this.donaciones = response;
      console.log(response);
    });
  }
};
</script>
