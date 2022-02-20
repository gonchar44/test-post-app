import { computed } from '@vue/composition-api';
import store from '../store';

export function useAuthor() {
  const author = computed(() => {
    return store.getters.getPostAuthor;
  });

  const authorFullName = computed(() => {
    if (!author.value) return '';
    return `${author.value.first_name || ''} ${author.value.last_name || ''}`;
  });

  return { author, authorFullName };
}
