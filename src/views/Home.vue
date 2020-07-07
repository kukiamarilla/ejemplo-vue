<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <template v-for="donacion in donaciones">
          <div
            :class="selected == donacion.id ? 'active donacion' : 'donacion'"
            v-on:click="select(donacion.id)"
            v-bind:key="donacion.id"
          >
            <Donacion :donacion="donacion"></Donacion>
          </div>
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
      donaciones: [],
      selected: 0
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
  },
  methods: {
    select(id) {
      this.selected = id;
    }
  }
};
</script>

<style scoped>
.donacion {
  position: relative;
  top:0;
  transition: top 0.5s linear;
}
.active {
  top: -20px;
}
</style>
