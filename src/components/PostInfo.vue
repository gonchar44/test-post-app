<template>
  <div class="post-info-c">
    <div class="post-info-c__likes">
      <img v-if="likesUser && likesUser.profile_image"
           class="post-info-c__likes-img"
           :src="likesUser.profile_image.small"
           alt=""
      >
      <div class="post-info-c__likes-message">
        Liked by <span v-if="likesUser" class="post-info-c__likes-user">
        {{ likesUser.username }}
      </span>
        and <span class="post-info-c__likes-user">and {{ likesCount }} others</span>
      </div>
    </div>

    <div class="post-info-c__description">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, commodi?
    </div>

    <div class="post-info-c__bottom">
      <Likes />
      <div class="post-info-c__bottom-comments">
        30 comments
      </div>
    </div>
  </div>
</template>

<script>
  import { computed } from '@vue/composition-api';
  import store from '../store';
  import { useLikes } from '../use/likes';

  export default {
    name: 'PostInfo',
    components: {
      Likes: () => import('./Likes'),
    },
    setup() {
      const likesUser = computed(() => {
        return store.getters.getLikesUser;
      });

      return { likesUser, ...useLikes() };
    },
  }
</script>

<style>
.post-info-c {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 11px;
}
.post-info-c__likes {
  display: flex;
  align-items: center;
  font-size: 14px;
}
.post-info-c__likes-message {
  text-align: left;
}
.post-info-c__likes-img {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  margin-right: 5px;
}
.post-info-c__likes-user {
  font-weight: bold;
  letter-spacing: 0;
}

.post-info-c__description {
  font-size: 14px;
  text-align: left;
  margin-top: 10px;
}

.post-info-c__bottom {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.post-info-c__bottom-comments {
  color: gray;
  font-size: 14px;
}
</style>
