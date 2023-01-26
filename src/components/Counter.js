import { useSelector, useDispatch } from 'react-redux'
import classes from './Counter.module.css'
import { counterActions } from '../store/index'
const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter.counter) // 호출시도
  const show = useSelector((state) => state.counter.showCounter)
  const incrementHandler = () => {
    dispatch(counterActions.icrement())
  }
  const increaseHandler = () => {
    dispatch(counterActions.increase(10))
  }
  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }
  const toggleCounterHandler = () => {
    //리덕스에서 상태 변환  카운터가 다 보이는거 없애기
    dispatch(counterActions.toggleCounter())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  )
}

export default Counter
