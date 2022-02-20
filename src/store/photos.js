import { usePhotosApi } from '../use/photos';

export default {
  state: {
    isLoading: false,
    isLiked: false,
    likesCount: 44,
    photos: [],
    likesUser: null,
    author: null,
  },
  getters: {
    getIsLoading(state) {
      return state.isLoading;
    },
    getPhotos(state) {
      return state.photos;
    },
    getLikesUser(state) {
      return state.likesUser;
    },
    getPostAuthor(state) {
      return state.author;
    },
    getIsLiked(state) {
      return state.isLiked;
    },
    getLikesCount(state) {
      return state.likesCount;
    },
  },
  mutations: {
    setIsLoading(state, isLoadingVal) {
      state.isLoading = isLoadingVal;
    },
    setAuthor(state, author) {
      state.author = author;
    },
    setLikesUser(state, user) {
      state.likesUser = user;
    },
    setPhotos(state, fetchedPhotos) {
      state.photos = fetchedPhotos;
    },
    toggleLike(state) {
      state.isLiked = !state.isLiked;
      state.isLiked
        ? state.likesCount += 1
        : state.likesCount -= 1;
    },
  },
  actions: {
    async fetchPhotos({ commit }) {
      commit('setIsLoading', true);
      const { photosResponse } = await usePhotosApi();
      commit('setAuthor', photosResponse.value[0].user);
      commit('setLikesUser', photosResponse.value[2].user);
      commit('setPhotos', photosResponse.value);
      commit('setIsLoading', false);
    },
  },
}
