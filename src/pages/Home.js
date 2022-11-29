import { useState, useContext, useEffect } from 'react';
import { DiaryStateContext } from '../App';

import MyHeader from '../components/MyHeader';
import MyButton from '../components/MyButton';

const Home = () => {
  // uesContext: Context 값 조회
  const diaryList = useContext(DiaryStateContext);

  const [data, setData] = useState([]);
  const [curDate, setCurDate] = useState(new Date());
  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

  useEffect(() => {
    if (diaryList.length < 1) {
      return;
    }

    const firstDay = new Date(
      curDate.getFullYear(),
      curDate.getMonth(),
      1
    ).getTime();

    const lastDay = new Date(
      curDate.getFullYear(),
      curDate.getMonth(),
      0
    ).getTime();

    setData(
      diaryList.filter((it) => {
        console.log(it);
        return firstDay <= it.date && it.date <= lastDay;
      })
    );
  }, [diaryList, curDate]);
  // diaryList가 변경되어도 동작해야함! Why?
  // diaryList가 변경 = 일기 추가, 수정, 삭제를 의미 -> 리스트 변경 필요

  useEffect(() => {
    console.log(data);
  }, [data]);

  const increaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate())
    );
  };

  const decreaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate())
    );
  };

  return (
    <div>
      <MyHeader
        headText={headText}
        leftChild={<MyButton text={'<'} onClick={decreaseMonth} />}
        rightChild={<MyButton text={'>'} onClick={increaseMonth} />}
      />
    </div>
  );
};

export default Home;
