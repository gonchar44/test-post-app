<template>
  <div class="post-info-c__bottom-likes">
    <img v-if="isLiked"
         class="post-info-c__bottom-likes_icon"
         src="@/images/filled-like.svg"
         @click="toggleLike(false)"
         alt=""
    >
    <img v-else
         class="post-info-c__bottom-likes_icon"
         src="@/images/empty-like.svg"
         @click="toggleLike(true)"
         alt=""
    >
    {{ likesCount }}
  </div>
</template>

<script>
  import { useLikes } from '../use/likes';

  export default {
    name: 'Likes',
    setup() {
      return { ...useLikes() };
    },
  }
</script>

<style>
.post-info-c__bottom-likes {
  display: flex;
  font-size: 15px;
  font-weight: bold;
}
.post-info-c__bottom-likes_icon {
  width: 20px;
  cursor: pointer;
  margin-right: 10px;
}
</style>
