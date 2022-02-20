<template>
  <div class="swiper-c">
    <div class="swiper-c__line">
      <div class="swiper-c__line-background"
           :style="{ width: swiperPosition + '%' }"
      ></div>
      <div class="swiper-c__line-dot"
           :style="{ left: swiperPosition + '%'}"
      ></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SwiperLine',
    props: {
      swiperPosition: Number,
    },
  }
</script>

<style>
.swiper-c {
  width: 75%;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9;
}
.swiper-c__line {
  height: 3px;
  background: rgba(255, 255, 255, .6);
  border-radius: 3px;
}
.swiper-c__line-background {
  width: 5%;
  height: 100%;
  background: #fff;
  border-radius: 3px;
  transition: width .3s ease-in-out;
}

.swiper-c__line-dot {
  width: 12px;
  height: 12px;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  top: -150%;
  transition: all .3s ease-in-out;
}
</style>
