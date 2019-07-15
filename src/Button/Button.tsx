import React from "react";
import * as css from "./Button.module.css";
import classNames from "classnames";

interface Props {
  children: React.ReactNode;
  count?: number;
  onClick?: () => void;
  primary?: boolean;
  variant?: "default" | "big" | "small";
}

const Button: React.FC<Props> = ({
  variant = "default",
  primary,
  count,
  onClick,
  children
}) => {
  const cn = classNames(css.button, css[variant] as string, {
    [css.odd]: (count || 0) % 2 === 1,
    [css.even]: (count || 0) % 2 === 0,
    [css.primary]: primary
  });
  return (
    <button className={cn} onClick={onClick}>
      {children} : {count}
    </button>
  );
};

export default Button;
