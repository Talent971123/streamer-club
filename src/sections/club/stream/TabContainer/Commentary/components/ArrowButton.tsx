import React, { ReactNode } from 'react'

interface ArrowProps {
  children?: ReactNode;
  className?: string
  style?: object
  type: string
  onClick?(): any
}

const Arrows: React.FC<ArrowProps> = ({
  className, style, onClick, type = "next"
}) => {

  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        top: "50px",
      }}
      onClick={onClick}
    />
  );
};

export default Arrows