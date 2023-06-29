import { createSlice } from "@reduxjs/toolkit";

interface detailProjectState {
  isShow: boolean;
  title: string;
  content: string;
  imageList: string[];
}

const initialState: detailProjectState = {
  isShow: false,
  title: "",
  content: "",
  imageList: [],
};

export const detailProjectSlice = createSlice({
  name: "detail-project",
  initialState,
  reducers: {
    setDetailProject: (
      state,
      action: {
        type: string;
        payload: {
          isShow: boolean;
          title?: string;
          content?: string;
          imageList?: string[];
        };
      }
    ) => {
      state.isShow = action.payload.isShow;
      state.title = action.payload?.title || "";
      state.content = action.payload?.content || "";
      state.imageList = action.payload?.imageList || [];
    },
  },
});

export const { setDetailProject } = detailProjectSlice.actions;

export default detailProjectSlice.reducer;
