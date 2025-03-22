import React from "react";
import "./styles/ButtonStyles.css"; 

interface ButtonProps {
  text: string;
  href?: string; 
}

const UiverseButton: React.FC<ButtonProps> = ({ text, href }) => {
  const buttonContent = (
    <>
      <span className="actual-text">&nbsp;{text}&nbsp;</span>
      <span aria-hidden="true" className="hover-text">&nbsp;{text}&nbsp;</span>
    </>
  );

  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="uiverse-button"
      data-text={text}
    >
      {buttonContent}
    </a>
  ) : (
    <button className="uiverse-button" data-text={text}>
      {buttonContent}
    </button>
  );
};

const GlowingButton: React.FC<ButtonProps> = ({ text, href }) => {
  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="glowing-button inline-flex items-center justify-center px-6 py-3 rounded-lg font-bold transition-all hover:scale-105"
    >
      {text}
    </a>
  ) : (
    <button className="glowing-button">{text}</button>
  );
};

export { UiverseButton, GlowingButton };
