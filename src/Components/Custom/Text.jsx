const LightGrayText = ({ children, className = "" }) => {
  return <span className={`text-[#AFB1B5] ${className}`}>{children}</span>;
};

const DarkGrayText = ({ children, className = "" }) => {
  return <span className={`text-[#666874] ${className}`}>{children}</span>;
};
export { LightGrayText, DarkGrayText };
