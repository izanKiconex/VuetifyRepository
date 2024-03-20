<template>
    <v-app-bar>
      <v-app-bar-nav-icon @click="toggleDrawer" />
      <v-toolbar-title>Mi Calculadora</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text @click="logout">Logout</v-btn>
    </v-app-bar>
  
    <v-navigation-drawer v-model="drawer">
      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" @click="navigate(item.route)">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </template>
  
  <script>
  export default {
    data() {
      return {
        drawer: false,
        items: [
          { title: 'Home', icon: 'mdi-home', route: '/' },
          { title: 'About', icon: 'mdi-information', route: '/about' },
          { title: 'Contact', icon: 'mdi-email', route: '/contact' }
        ]
      };
    },
    methods: {
      toggleDrawer() {
        this.drawer = !this.drawer;
      },
      navigate(route) {
        // Implementa la lógica para la navegación en la aplicación
        console.log("Navigating to:", route);
        // this.$router.push(route); // Si estás utilizando Vue Router, puedes habilitar esta línea
        this.drawer = false; // Cerrar el cajón de navegación después de la navegación
      },
      logout() {
        // Implementa la lógica para el logout
        console.log("Logging out...");
      }
    }
  };
  </script>
  
  <style>
  /* Estilo para el fondo de v-app-bar */
  .v-toolbar__content {
    background-color: #333; /* Cambia #333 por el color que desees */
  }

  /* Estilo para el texto en v-app-bar */
  .v-toolbar__title {
    color: white;
  }

  /* Estilo para el fondo del navigation drawer */
  .v-navigation-drawer__content {
    background-color: #333; /* Cambia #333 por el color que desees */
  }

  

  /* Estilo para el texto en el navigation drawer */
  .v-list-item__title {
    color: white;
  }

  /* Estilo para el icono en el navigation drawer */
  .v-icon {
    color: white;
  }

</style>

