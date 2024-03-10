import { IconType } from "react-icons";

interface CardProps {
  Icon: IconType;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ Icon, title, description }) => {
  return (
    <div className="max-w-[600px] rounded-xl border border-solid border-burlywood/50 p-5">
      <Icon size={30} />
      <h1 className="headline-small">{title}</h1>
      <p className="body-large text-burlywood">{description}</p>
    </div>
  );
};

export default Card;
