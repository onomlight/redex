const redux = require('redux')
// 기본 nodejs 명령어

// function counterReducer (){}

const counterReducer = (state, action) => {
  // 해당상태에서 리듀서함수에 액션값을 받을것 => 궁극적으로 리덕스 라이브러리에 의해 실행

  return {
    // 새로운 객체를 리턴 -> 이 객체는 어떠한 구조가 가능하며 개발자 재량으로 변함
    counter: 0,
    // 카운터가 0으로 생성된 객체를 리턴
  }
}

const store = redux.createStore()
// 데이터를관리하는게 리듀서함수에 결정됨

// === 리덕스 라이브러리에서 받아서 기존상태에서 받음
