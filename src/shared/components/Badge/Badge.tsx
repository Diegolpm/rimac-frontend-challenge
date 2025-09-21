import type { FC } from "react";
import "./Badge.scss";

interface BadgeProps {
  text: string;
}

const Badge: FC<BadgeProps> = ({ text }) => {
  return (
    <div className="badge">
      <span className="badge__text">{text}</span>
    </div>
  );
};

export default Badge;
