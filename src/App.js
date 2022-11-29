import React, { useRef, useReducer } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import New from './pages/New';

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case 'INIT': {
      return action.data;
    }
    case 'CREATE': {
      newState = [action.data, ...state];
      break;
    }
    case 'REMOVE': {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case 'EDIT': {
      newState = state.map((it) =>
        it.id === action.data.id ? { ...action.data } : it
      );
      break;
    }
    default:
      return state;
  }
  return newState;
};

export const DiaryStateContext = React.createContext();
export const DiaryDipatchContext = React.createContext();

const dummyData = [
  {
    id: 1,
    emotion: 1,
    content: '오늘의 일기 1번',
    date: 1669734704862,
  },
  {
    id: 2,
    emotion: 2,
    content: '오늘의 일기 2번',
    date: 1669734704863,
  },
  {
    id: 3,
    emotion: 3,
    content: '오늘의 일기 3번',
    date: 1669734704864,
  },
  {
    id: 4,
    emotion: 4,
    content: '오늘의 일기 4번',
    date: 1669734704865,
  },
  {
    id: 5,
    emotion: 5,
    content: '오늘의 일기 5번',
    date: 1669734704866,
  },
];

function App() {
  // `const [state, dispatch] = useReducer(reducer, 1);`
  // - `state`: 상태
  // - `dispatch`: 상태 변화를 일으킴(raise)
  //    - dispatch(객체): 객체=action, action 객체는 reducer로 날아감 (함수형 업데이트 필요없이 dispatch 호출시 알아서 현재 state를 reducer 함수가 참조함)
  // - `reducer`: 상태 변화를 처리
  //    - reducer(state, action)
  //    - state: 최신의 state
  //    - action: dispatch에서 전달하는 action 객체
  //      switch-case 문을 이용해 action.type에 따라 다른 값을 반환
  // - `1`: state의 초기값
  const [data, dispatch] = useReducer(reducer, dummyData);

  const dataId = useRef(0);

  // CREATE
  const onCreate = (date, content, emotion) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
    dataId.current += 1;
  };

  // REMOVE
  const onRemove = (targetId) => {
    dispatch({ type: 'REMOVE', targetId });
  };

  // EDIT
  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: 'EDIT',
      data: {
        id: targetId,
        date: new Date().getTime(),
        content,
        emotion,
      },
    });
  };

  return (
    // BrowserRouter 컴포넌트로 감싸면 브라우저 url 과 mapping 될 수 있음
    <DiaryStateContext.Provider value={data}>
      <DiaryDipatchContext.Provider value={{ onCreate, onRemove, onEdit }}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new" element={<New />} />
              <Route path="/edit" element={<Edit />} />
              <Route path="/diary/:id" element={<Diary />} />
            </Routes>
          </div>
        </BrowserRouter>
      </DiaryDipatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
