import { BrowserRouter, Routes, Route } from 'react-router-dom';

import RouteTest from './components/RouteTest';
import Home from './pages/Home';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import New from './pages/New';

import './App.css';

function App() {
  return (
    // BrowserRouter 컴포넌트로 감싸면
    // 브라우저 url 과 mapping 될 수 있음
    <BrowserRouter>
      <div className="App">
        <h1>App.js</h1>
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
