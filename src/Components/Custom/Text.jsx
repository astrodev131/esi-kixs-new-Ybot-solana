const LightGrayText = ({ children, className = "" }) => {
  return <div className={`text-[#AFB1B5] ${className}`}>{children}</div>;
};

const DarkGrayText = ({ children, className = "" }) => {
  return <div className={`text-[#666874] ${className}`}>{children}</div>;
};

const BrownLargeText = ({ children, className = "" }) => {
  return (
    <div className={`text-[#3F3008] font-bold text-[30px] ${className}`}>
      {children}
    </div>
  );
};
const BrownText = ({ children, className = "" }) => {
  return (
    <div className={`text-[#A37E39] font-semibold text-[14px] ${className}`}>
      {children}
    </div>
  );
};
const WhiteBoldText = ({ children, className = "" }) => {
  return (
    <div className={`text-white font-extrabold text-[34px] ${className}`}>
      {children}
    </div>
  );
};
export {
  LightGrayText,
  DarkGrayText,
  BrownLargeText,
  BrownText,
  WhiteBoldText,
};
