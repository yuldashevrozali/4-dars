import './index.css';

interface ButtonProps {
  text: string;
  color: string;
  color1: string;
  onclick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, color, color1, onclick }) => {
  return (
    <div>
      <button onClick={onclick} style={{ background: color, color: color1 }}>
        {text}
      </button>
    </div>
  );
};

export default Button;
