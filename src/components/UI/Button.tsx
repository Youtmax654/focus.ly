type ButtonProps = {
  value: string;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ value, className }) => {
  return (
    <div className={className}>
      <button className="button h-12 rounded-xl bg-seagreen px-4 text-white">
        {value}
      </button>
    </div>
  );
};

export default Button;
