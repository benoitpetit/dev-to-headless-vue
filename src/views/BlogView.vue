<template>
  <div class="blog-view">
    <h1>Welcome to the BlogView!</h1>
    <!-- check and loop blogcontent for show -->
    <div v-if="blogContent.length">
      <div v-for="(content, index) in blogContent" :key="index">
        <!-- here we create the link with the post id as parameter -->
        <router-link :to="`/post/${content.id}`">
          <h2>{{ content.title }}</h2>
        </router-link>
        <p>{{ content.description }}</p>
        <ul>
          tags:
          <span v-for="(tag, index) in content.tag_list" :key="index">
            {{ tag }},
          </span>
        </ul>
      </div>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "BlogView",
  setup() {
    const store = useStore();

    const blogContent = computed(() => store.state.blogContent);

    return {
      blogContent,
    };
  },
};
</script>
