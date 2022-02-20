<template>
  <div class="post-c">
    <PostHeader />
    <Images />
  </div>
</template>

<script>
import store from '../store';

export default {
  name: 'Post',
  components: {
    PostHeader: () => import('./PostHeader'),
    Images: () => import('./Images'),
  },
  setup() {
    store.dispatch('fetchPhotos');
  },
}
</script>

<style>
.post-c {
  width: 320px;
  border-radius: 8px;
  box-shadow: 0 0 11px 5px rgba(0, 0, 0, .29);
  margin: 10px auto;
  padding: 10px 0;
}
</style>
