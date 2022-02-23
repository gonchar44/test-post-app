<template>
  <div class="images-control">
    <Loader v-if="isLoading"
            class="images-control-loader"
    />

    <div class="images-control__slider"
         v-touch:swipe="swipeHandler"
    >
      <template v-if="photos.length">
        <ArrowBtn class="arrow-btn-left"
                  type="left"
                  @click.native="slideImg('prev')"
        />
        <ArrowBtn class="arrow-btn-right"
                  type="right"
                  @click.native="slideImg('next')"
        />
      </template>
      <div class="images-control__slider-item"
           v-for="(img, imgIndex) in photos"
           :style="[imgIndex === 0 ? { marginLeft: slidesPosition } : null]"
           :key="img.id"
      >
        <img :class="[
                getImgClass(imgIndex),
                getThinImgClass(img),
             ]"
             :src="img.urls.regular"
             alt=""
        >
      </div>

      <SwiperLine v-if="photos.length > 1"
                  :swiperPosition="swiperPosition"
      />
    </div>
  </div>
</template>

<script>
  import { usePhotos } from '../use/photos';
  import { useSwiperControl } from '../use/swiperControl';

  export default {
    name: 'Images',
    components: {
      Loader: () => import('./Loader'),
      ArrowBtn: () => import('./ArrowBtn'),
      SwiperLine: () => import('./SwiperLine'),
    },
    setup() {
      const { photos } = usePhotos();

      return {
        ...usePhotos(),
        ...useSwiperControl(photos),
      };
    },
  }
</script>

<style>
.images-control {
  position: relative;
}
.images-control__slider {
  width: 320px;
  height: 430px;
  display: flex;
  position: relative;
  overflow: hidden;
}

.images-control__slider-item {
  min-width: 320px;
  height: 430px;
  transition: all .3s ease-in-out;
}

.images-control__slider-current {
  width: 320px;
  height: 430px;
  object-fit: cover;
}
.images-control__slider-another {
  height: 100%;
  object-fit: cover;
}

.images-control__slider-thin {
  width: 100%;
}

.images-control-loader {
  position: absolute;
  top: 46%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.arrow-btn-left,
.arrow-btn-right {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.arrow-btn-left {
  left: 7px;
}

.arrow-btn-right {
  right: 7px;
}
</style>
