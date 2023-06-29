import type { RootState } from "../store";

export const getLoadingSelector = (state: RootState) => state.loading.isLoading;
export const getIsShowModalDetailProject = (state: RootState) =>
  state.detailProject.isShow;
export const getTitleModalDetailProject = (state: RootState) =>
  state.detailProject.title;
export const getContentModalDetailProject = (state: RootState) =>
  state.detailProject.content;
export const getImageListModalDetailProject = (state: RootState) =>
  state.detailProject.imageList;
