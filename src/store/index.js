import { createStore } from "vuex";

export default createStore({
  state: {
    blogContent: [],
  },
  getters: {
    blogContent: (state) => {
      return state.blogContent;
    },
  },
  mutations: {
    SET_BLOG(state, blogContent) {
      state.blogContent = blogContent;
    },
  },
  actions: {
    async getBlogContent({ state, commit }) {
      // check if blogContent is already set
      // here we check that we have retrieved the list of articles from dev.to
      // to avoid executing the request each time the page is reloaded
      if (state.blogContent.length) return;

      // fetch blog content to dev.to api and set state
      const response = await fetch(
        // you can also retrieve the url with an .env file
        "https://dev.to/api/articles?username=benoitpetit"
      );
      const blogContent = await response.json();
      // commit mutation to set blogContent state
      commit("SET_BLOG", blogContent);

      return blogContent;
    },
  },
});
