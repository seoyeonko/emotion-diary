import { BrowserRouter, Routes, Route } from 'react-router-dom';

import RouteTest from './components/RouteTest';
import Home from './pages/Home';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import New from './pages/New';

import './App.css';

// COMPONENTS
import MyHeader from './components/MyHeader';
import MyButton from './components/MyButton';

function App() {
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || '';

  return (
    // BrowserRouter 컴포넌트로 감싸면
    // 브라우저 url 과 mapping 될 수 있음
    <BrowserRouter>
      <div className="App">
        <h1>App.js</h1>
        {/* 컴포넌트 자체를 Prop으로 전달하기!
          - text, onclick을 별도의 prop으로 전달할 필요가 없다는 장점~
        */}
        <MyHeader
          headText={'App'}
          leftChild={
            <MyButton text={'왼쪽 버튼'} onClick={() => alert('왼쪽 클릭')} />
          }
          rightChild={
            <MyButton
              text={'오른쪽 버튼'}
              onClick={() => alert('오른쪽 클릭')}
            />
          }
        />
        <MyButton
          text={'버튼'}
          onClick={() => alert('버튼 클릭')}
          type={'positive'}
        />
        <MyButton
          text={'버튼'}
          onClick={() => alert('버튼 클릭')}
          type={'negative'}
        />
        <MyButton text={'버튼'} onClick={() => alert('버튼 클릭')} />

        {/* process.env.PUBLIC_URL: /public 폴더 경로
        <img
          src={process.env.PUBLIC_URL + `/assets/emotion1.png`}
          alt="감정이미지"
        />
        <img
          src={process.env.PUBLIC_URL + `/assets/emotion2.png`}
          alt="감정이미지"
        />
        <img
          src={process.env.PUBLIC_URL + `/assets/emotion3.png`}
          alt="감정이미지"
        />
        <img
          src={process.env.PUBLIC_URL + `/assets/emotion4.png`}
          alt="감정이미지"
        />
        <img
          src={process.env.PUBLIC_URL + `/assets/emotion5.png`}
          alt="감정이미지"
        /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/diary/:id" element={<Diary />} />
        </Routes>
        {/* 페이지 깜빡임 -> mpa 특징 -> 사용 x (외부 사이트 연결시에만 사용 ) */}
        {/* <a href={'/new'}>new 페이지 이동</a> */}
        {/* 페이지 깜빡임 없이 페이지 변환 가능 */}
        <RouteTest />
      </div>
    </BrowserRouter>
  );
}

export default App;
