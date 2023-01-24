//여기서는 리덕스 로직을 저장할것
import { createStore } from 'redux'
const inititalState = { counter: 0, showCounter: true }
const counterReducer = (state = inititalState, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    }
  }
  // if (action.type === 'increasesby5') {
  //   return {
  //     counter: state.counter + 5,
  //   }
  // } 하드코딩 => 더미일뿐 5씩증가하는거에 대해서는 실 사용시 문제발생함
  if (action.type === 'increase') {
    return {
      counter: state.counter + action.amount, // 액션으로부터 증가값을 얻는걸 예측 벨류나어마운트 추가가능
      showCounter: state.showCounter,
    }
  }
  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    }
  }
  if (action.type === 'toggle') {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    }
  }
  return state
}
const store = createStore(counterReducer)

export default store
