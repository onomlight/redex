const redux = require('redux')
// 기본 nodejs 명령어

// function counterReducer (){}

const counterReducer = (state, action) => {
  // 해당상태에서 리듀서함수에 액션값을 받을것 => 궁극적으로 리덕스 라이브러리에 의해 실행

  return {
    // 새로운 객체를 리턴 -> 이 객체는 어떠한 구조가 가능하며 개발자 재량으로 변함
    // counter: 0,
    // 카운터가 0으로 생성된 객체를 리턴
    counter: state.counter + 1,
    // 자동으로 받는 state를 참조하여 counter 값을 엑세스 하고 새로된 상태를 리턴함
    // 이러면 리듀서가 완성됨
  }
}

const store = redux.createStore(counterReducer)
// 데이터를관리하는게 리듀서함수에 결정됨

// === 리덕스 라이브러리에서 받아서 기존상태에서 받음

// 먼저 구독 시작  그러기위해서 새상수를 넣을것

const counterSubscriber = () => {
  const latestSate = store.getState()
  console.log(latestSate)
}

store.subscribe(counterSubscriber)

// 이후 node redux-demo.js  라고 터미널에 치면 코드 실행됨 >> 카운터에 오류 발생함
