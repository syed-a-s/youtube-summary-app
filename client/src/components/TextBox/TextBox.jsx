import './TextBox.css';

const TextBox = ({ text }) => {
  return (
    <div className='textbox'>
      <p>{text}</p>
    </div>
  );
}

export default TextBox;