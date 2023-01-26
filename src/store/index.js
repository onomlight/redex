//여기서는 리덕스 로직을 저장할것

import { createSlice, configureStore } from '@reduxjs/toolkit'
//slice 가 redux 보다는 강력함

const inititalCounterState = { counter: 0, showCounter: true }
const counterSlice = createSlice({
  name: 'counter',
  inititalState: inititalCounterState,
  reducers: {
    //모든메서드들은 자동으로 최근값을 받고 나중에 리덕스에 의해 호출
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    increase(state, action) {
      state.counter = state.counter + action.payload
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter
    },
  },
})
// const counterReducer = (state = inititalState, action) => {
//   if (action.type === 'increment') {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     }
//   }
//   // if (action.type === 'increasesby5') {
//   //   return {
//   //     counter: state.counter + 5,
//   //   }
//   // } 하드코딩 => 더미일뿐 5씩증가하는거에 대해서는 실 사용시 문제발생함
//   if (action.type === 'increase') {
//     return {
//       counter: state.counter + action.amount, // 액션으로부터 증가값을 얻는걸 예측 벨류나어마운트 추가가능
//       showCounter: state.showCounter,
//     }
//   }
//   if (action.type === 'decrement') {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     }
//   }
//   if (action.type === 'toggle') {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     }
//   }
//   return state
// }

//
const inititalAuthState = {
  isAuthenticated: false,
}
const authSlice = createSlice({
  name: 'authentication',
  inititalState: inititalAuthState,
  reducer: {
    login(state) {
      state.inititalAuthState = true
    },
    logout(state) {
      state.inititalAuthState = false
    },
  },
})
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
})
export const counterActions = counterSlice.action
export const authActions = authSlice.action
export default store
