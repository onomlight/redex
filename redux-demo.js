const redux = require('redux')
// 기본 nodejs 명령어

// function counterReducer (){}

const counterReducer = (state = { counter: 0 }, action) => {
  // 해당상태에서 리듀서함수에 액션값을 받을것 => 궁극적으로 리덕스 라이브러리에 의해 실행

  //@ 일반적으로 리럭스를 사용할때 리듀서 내부에서 다른 일을 하는게 목표 !! // 액션 변수를 활용함
  if (action.type === 'increment') {
    return {
      // 새로운 객체를 리턴 -> 이 객체는 어떠한 구조가 가능하며 개발자 재량으로 변함
      // counter: 0,
      // 카운터가 0으로 생성된 객체를 리턴
      counter: state.counter + 1,
      // 자동으로 받는 state를 참조하여 counter 값을 엑세스 하고 새로된 상태를 리턴함
      // 이러면 리듀서가 완성됨
    }
  }
  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
    }
  }
  return state
}

const store = redux.createStore(counterReducer)

//>> 오류없이 실행되나 표시가 안됨으로 콘솔로그 실행
console.log(store.getState())
// 데이터를관리하는게 리듀서함수에 결정됨

// === 리덕스 라이브러리에서 받아서 기존상태에서 받음

// 먼저 구독 시작  그러기위해서 새상수를 넣을것

const counterSubscriber = () => {
  const latestSate = store.getState()
  console.log(latestSate)
}

store.subscribe(counterSubscriber)

// 이후 node redux-demo.js  라고 터미널에 치면 코드 실행됨 >> 카운터에 오류 발생함
// 카운터가 처음 실행되는데 +1 할 값이 없음으로 보조 기본값이 있어야함 그래서 스테이넣기

store.dispatch({ type: 'increment' }) // dispatch는 액션을 발송하는 메소드
// 카운터를 증가시키기 위해 ‘increment’라는 타입 추가

store.dispatch({ type: 'decrement' })
// 감소 타입
//>> 카운터가 증가했다 감소하는것으로 출력됨
