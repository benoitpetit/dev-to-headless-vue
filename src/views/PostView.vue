<template>
  <div class="post-view">
    <!-- Check if the post belongs to me! important though :)  -->
    <div v-if="postContent.user && postContent.user.username === 'benoitpetit'">
      <div class="title">
        <h1>{{ postContent.title }}</h1>
      </div>
      <a
        :href="
          postContent.user ? `https://dev.to/${postContent.user.username}` : ''
        "
        class="author"
      >
        <img
          class="rounded-circle"
          :src="postContent.user ? postContent.user.profile_image : ''"
          height="80"
          alt="profil pic"
        />
        <p>
          {{ postContent.user ? postContent.user.name : "" }}
        </p>
      </a>
      <div class="content-post-markdown">
        <Markdown
          class="content-post"
          :source="postContent.body_markdown"
        ></Markdown>
        <span class="post-id">The ID of the post is: {{ postId }}</span>
      </div>
    </div>
    <div v-else>
      <p style="text-align: center">
        Sorry, you are not the author of this post
      </p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import Markdown from "vue3-markdown-it";

export default {
  name: "PostView",
  components: {
    Markdown,
  },
  setup() {
    const route = useRoute();
    const postId = ref(route.params.id);
    const postContent = ref([null]);

    // get post content we could put it in the blind too
    const fetchPost = async () => {
      try {
        const response = await fetch(
          // you can also retrieve the url with an .env file
          "https://dev.to/api/articles/" + postId.value
        );
        const data = await response.json();
        postContent.value = data;
      } catch (error) {
        console.error(error);
      }
    };

    // fetch data post on mounted
    onMounted(() => fetchPost());

    // watch for route change
    watch(
      () => route.params.id,
      (newId, oldId) => {
        if (newId !== oldId && newId !== undefined) {
          postId.value = newId;
          fetchPost();
        }
      }
    );

    return {
      postId,
      postContent,
    };
  },
};
</script>
