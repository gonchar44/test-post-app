import { ref, watch, computed } from '@vue/composition-api';

export function useSwiperControl(photos) {
  const currentPhoto = ref(0);
  const swiperPosition = ref(0);
  const swiperPositionPercent = ref(0);

  const getImgClass = imgIndex => {
    return currentPhoto === imgIndex
      ? 'images-control__slider-current'
      : 'images-control__slider-another';
  };

  const getThinImgClass = img => {
    return img.width < img.height
      ? 'images-control__slider-thin'
      : '';
  };

  watch(() => photos.value, () => {
    swiperPositionPercent.value = 100 / (photos.value.length - 1);
  });

  const slidesPosition = computed(() => {
    return currentPhoto.value > 0
      ? `-${currentPhoto.value * 100}%`
      : currentPhoto.value;
  });

  const slideImg = (stepType) => {
    if (stepType === 'next' && (currentPhoto.value + 1) < photos.value.length) {
      currentPhoto.value += 1;
      swiperPosition.value += swiperPositionPercent.value;
    } else if (stepType === 'prev' && currentPhoto.value > 0) {
      currentPhoto.value -= 1;
      swiperPosition.value -= swiperPositionPercent.value;
    }
  };

  const swipeHandler = swipeType => {
    swipeType === 'left'
      ? slideImg('next')
      : slideImg('prev');
  };

  const getSliderItemPosition = (imgIndex, slidesPosition) => {
    return imgIndex === 0
      ? { marginLeft: slidesPosition }
      : null;
  };

  return {
    currentPhoto,
    swiperPosition,
    swiperPositionPercent,
    slidesPosition,
    getSliderItemPosition,
    getImgClass,
    getThinImgClass,
    slideImg,
    swipeHandler,
  };
}
