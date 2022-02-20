import { computed } from '@vue/composition-api';
import { useFetch } from './fetch';
import store from '../store';

export async function usePhotosApi() {
  const unsplashCliendId = process.env.VUE_APP_UNSPLASH_CLIENT_ID;
  const url = `https://api.unsplash.com/photos?client_id=${unsplashCliendId}&per_page=5`;
  const { response: photosResponse } = await useFetch(url);

  return { photosResponse };
}

export function usePhotos() {
  const isLoading = computed(() => {
    return store.getters.getIsLoading;
  });
  const photos = computed(() => {
    return store.getters.getPhotos;
  });

  return { isLoading, photos };
}
