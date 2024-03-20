<template>
    <div class="text-center">
      <v-btn
        :loading="loading"
        @click="navigateToMiVista"
      >
        Custom loader
  
        <template v-slot:loader>
          <v-progress-linear indeterminate></v-progress-linear>
        </template>
      </v-btn>
    </div>
  </template>
  
  <script>
  import router from '../../router'; // Ajusta la ruta según la estructura de tu proyecto

  export default {
    data: () => ({
      loading: false,
    }),
  
    methods: {
      navigateToMiVista() {
        // Navega a la ruta con nombre "MiVista"
        this.$router.push({ name: 'MiVista' });
      }
    },
  
    watch: {
      loading(val) {
        if (!val) return;
  
        setTimeout(() => (this.loading = false), 2000);
      },
    },
  }
  </script>
  