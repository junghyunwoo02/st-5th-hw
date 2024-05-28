// src/redux/textsSlice.js
import { createSlice } from "@reduxjs/toolkit";

// 초기 상태 설정. 로컬 스토리지에서 저장된 텍스트를 불러오거나, 없으면 빈 배열을 사용합니다.
const initialState = {
  items: localStorage.getItem("texts")
    ? JSON.parse(localStorage.getItem("texts"))
    : [],
};

// createSlice를 사용하여 slice 생성
const textsSlice = createSlice({
  name: "texts", // slice의 이름 설정
  initialState, // 초기 상태 설정
  reducers: {
    // 텍스트를 추가하는 리듀서
    addText: (state, action) => {
      state.items.push(action.payload); // 새로운 텍스트를 상태에 추가
      localStorage.setItem("texts", JSON.stringify(state.items)); // 로컬 스토리지에 상태 저장
    },
  },
});

// 액션 생성자와 리듀서 내보내기
export const { addText } = textsSlice.actions;
export default textsSlice.reducer;
