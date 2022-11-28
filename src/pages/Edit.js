import { useNavigate, useSearchParams } from 'react-router-dom';

const Edit = () => {
  // [Page Moving]
  const navigate = useNavigate();

  // [Query String]
  // 상태와 상태변화함수 이름은 변경 가능하나 hooks 이름은 변경 불가능!
  // searchParams: get() 메서드를 통해 query string 사용 가능
  // setSearchParmas: searchParams 변경 가능 -> query string 변경 가능 (상태 변화 함수)
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get('id');
  const mode = searchParams.get('mode');
  console.log(id, mode);

  return (
    <div>
      <h1>Edit</h1>
      <p>이곳은 일기 수정 페이지 입니다.</p>
      <button onClick={() => setSearchParams({ who: 'sean' })}>qs</button>
      {/* navigate는 Link 태그를 클릭하지 않아도 페이지 변경 가능 */}
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        HOME으로 가기
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로 가기
      </button>
    </div>
  );
};

export default Edit;
