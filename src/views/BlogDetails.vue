<template>
  <div v-if="blog">
    <div class="blog">
      <img
        class="blog-image neu-border"
        :src="blog.post_img"
        :alt="blog.post_title"
      />
      <div class="blog-details">
        <h2>{{ blog.post_title }}</h2>
        <h4>{{ blog.post_date }}</h4>
        <p>{{ blog.post_body }}</p>
      </div>
    </div>
  </div>
  <div v-else>Loading the blog...</div>
</template>
<script>
// import blogCard from "@/components/blogs/blogCard.vue";

export default {
  // components: { blogCard },
  props: ["id"],
  data() {
    return {
      blog: null,
    };
  },
  mounted() {
    // Fetch goes here
  },
};
</script>
<style>
.blog {
  display: flex;
  padding: 0 10%;
  /* max-width: 600px; */
  margin-inline: auto;
  align-items: stretch;
  gap: 30px;
}
.blog-image {
  padding: 10px;
  width: 50%;
  max-height: 80vh;
  object-fit: contain;
}
.blog-details {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  text-align: end;
  gap: 8px;
}

.blogs-container {
  display: flex;
  flex-wrap: wrap;
  /* max-width: 600px; */
  width: 100%;
  margin-inline: auto;
  padding: 30px;
  /* overflow: auto; */
  gap: 2%;
  justify-content: stretch;
  align-items: stretch;
}
.neu-border {
  border-radius: 30px;
  background: #f5f5f5;
  box-shadow: 8px 8px 15px #e4e4e4, -8px -8px 15px #ffffff;
}
.neu-border-inset {
  border-radius: 30px;
  background: #f5f5f5;
  box-shadow: inset 8px 8px 15px #e4e4e4, inset -8px -8px 15px #ffffff;
}
@media screen and (max-width: 500px) {
  .blog {
    flex-direction: column;
  }
  .blog-image,
  .blog-details {
    width: 100%;
  }

  .blog-details {
    align-items: flex-start;
    text-align: left;
  }
}
</style>
