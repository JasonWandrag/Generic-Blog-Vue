<template>
  <div v-if="blogs">
    <h2>Blogs</h2>
    <div class="blogs-container">
      <router-link v-for="blog of blogs" :key="blog.post_id" :to="{ name: 'BlogDetails', params: { id: blog.post_id } }">
        <img :src="blog.post_img" alt="">
        {{ blog.post_title }}
        {{ blog.post_author }}
        {{ blog.post_body }}
      </router-link>
    </div>
  </div>
  <div v-else>Loading blogs...</div>
</template>
<script>
export default {
  data() {
    return {
      blogs: null,
    };
  },
  mounted() {
    // Fetch goes here
  },
};
</script>
<style>
.blogs-container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-inline: auto;
  padding: 30px;
  gap: 2%;
  justify-content: stretch;
  align-items: stretch;
  flex-direction: column;
}
</style>
