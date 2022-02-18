<template>
  <nav id="nav" :class="{ active: isActive }">
    <router-link @click="toggleNav" to="/">Home</router-link>
    <!-- <router-link @click="toggleNav" to="/about">About</router-link> -->
    <router-link @click="toggleNav" :to="{ name: 'Login' }">Login</router-link>
    <router-link @click="toggleNav" :to="{ name: 'Register' }"
      >Register</router-link
    >
    <router-link @click="toggleNav" :to="{ name: 'Blogs' }">Blogs</router-link>
    <router-link @click="toggleNav" :to="{ name: 'CreateBlog' }">Create Blog</router-link>
  </nav>
  <button id="nav-btn" @click="toggleNav">
    <i className="fas fa-bars"></i>
  </button>
</template>
<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleNav() {
      this.isActive = !this.isActive;
    },
  },
};
</script>
<style lang="scss">
#nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #f5f5f5;
  box-shadow: 8px 8px 15px #e4e4e4, -8px -8px 15px #ffffff;
}

#nav-btn {
  position: fixed;
  top: 20px;
  right: 20px;
  background: #f5f5f5;
  box-shadow: 8px 8px 15px #e4e4e4, -8px -8px 15px #ffffff;
  padding: 20px;
  border-radius: 50%;
  border: none;
  outline: none;
  display: none;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 20px;
    text-decoration: none;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

@media screen and (max-width: 500px) {
  #nav {
    height: 100%;
    left: -100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: left 0.1s linear;
  }
  #nav.active {
    left: 0;
  }
  #nav-btn {
    display: block;
  }
}
</style>
