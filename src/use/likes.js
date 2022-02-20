import { computed } from '@vue/composition-api';
import store from '../store';

export function useLikes() {
  const isLiked = computed(() => {
    return store.getters.getIsLiked;
  });
  const likesCount = computed(() => {
    return store.getters.getLikesCount;
  });

  const toggleLike = () => {
    store.commit('toggleLike');
  };

  return { isLiked, likesCount, toggleLike };
}
