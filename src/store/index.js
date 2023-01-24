//여기서는 리덕스 로직을 저장할것
import { createStore } from 'redux'
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
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
    }
  }
  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
    }
  }
  return state
}
const store = createStore(counterReducer)

export default store
