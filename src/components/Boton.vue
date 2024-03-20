<template>
    <v-btn color="primary" @click="irAMiVista">Ir a MiVista</v-btn>
  </template>
  
  <script>
  export default {
    methods: {
      irAMiVista() {
        // Redirige a la ruta de la vista "MiVista"
        this.$router.push({ name: 'MiVista' });
      }
    }
  }
  </script>
  