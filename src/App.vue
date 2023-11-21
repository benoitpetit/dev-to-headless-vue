<template>
  <div id="app">
    <header>
      <nav class="logo">
        <div>
          <a href="http://dev.to/benoitpetit">
            <img :src="devto" alt="Logo" />
          </a>
        </div>
        <div>
          <h1>dev.to headless vue</h1>
        </div>
      </nav>
    </header>
    <div id="app">
      <div class="menu">
        <router-link to="/">Accueil</router-link>
        <router-link to="/blog">Blog</router-link>
      </div>
      <router-view></router-view>
    </div>
  </div>
  <footer>
    <div class="footer">
      <p>©2023 - dev.to headless vue ❤️</p>
      <a href="https://benoitpetit.dev">https://benoitpetit.dev</a>
    </div>
  </footer>
</template>

<script>
import { onBeforeMount } from "vue";
import { useStore } from "vuex";
import devto from "./assets/logo.png";

export default {
  name: "App",
  setup() {
    const store = useStore();

    onBeforeMount(() => {
      store.dispatch("getBlogContent");
    });

    return {
      devto,
    };
  },
};
</script>
