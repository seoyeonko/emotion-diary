const MyButton = ({ text, type, onClick }) => {
  // type props에 positive, negative 외의 값을 집어넣었을 때 예외 처리
  const btnType = ['positive', 'negative'].includes(type) ? type : 'default';

  return (
    <button
      className={['MyButton', `MyButton_${btnType}`].join(' ')}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

MyButton.defaultProps = {
  type: 'default',
};

export default MyButton;
