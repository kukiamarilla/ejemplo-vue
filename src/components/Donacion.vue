<template>
  <div>
    <p>Id: {{ donacion.id }}</p>
    <p>Nombre: {{ donacion.nombre }}</p>
  </div>
</template>

<script>
export default {
  props: {
    donacion: Object
  }
};
</script>

<style></style>
