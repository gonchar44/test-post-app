<template>
  <div class="post-header-c">
    <div v-if="author"
         class="post-header-c__user"
    >
      <div class="post-header-c__user-photo">
        <img v-if="author && author.profile_image"
             class="post-header-c__user-photo_el"
             :src="author.profile_image.medium"
             :alt="authorFullName"
        >
        <div class="post-header-c__user-status"></div>
      </div>

      <div class="post-header-c__user-info user-info-c">
        <span class="user-info-c__name">
          {{ authorFullName }}
        </span>
        <span class="user-info-c__status">
          20 mins ago
        </span>
      </div>
    </div>

    <div class="post-header-c__control">
      <div class="post-header-c__control-dot"></div>
      <div class="post-header-c__control-dot"></div>
      <div class="post-header-c__control-dot"></div>
    </div>
  </div>
</template>

<script>
  import { useAuthor } from '../use/author';

  export default {
    name: 'PostHeader',
    setup() {
      return { ...useAuthor() };
    },
  }
</script>

<style>
.post-header-c {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  padding: 0 10px;
}
.post-header-c__user-status {
  width: 10px;
  height: 10px;
  background: #00ac00;
  border-radius: 50%;
  position: absolute;
  bottom: 6px;
  right: 10px;
  z-index: 15;
}
.post-header-c__user-photo {
  float: left;
  position: relative;
}
.post-header-c__user-photo_el {
  width: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.user-info-c {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.user-info-c__name {
  font-weight: bold;
}
.user-info-c__status {
  color: gray;
  font-size: 14px;
}

.post-header-c__control {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin-bottom: 7px;
  padding: 0 5px;
}
.post-header-c__control-dot {
  width: 4px;
  height: 4px;
  background: #000;
  border-radius: 50%;
  margin: 1px 0;
}
</style>
