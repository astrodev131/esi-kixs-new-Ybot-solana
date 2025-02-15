import React from "react";
import { BrownText, DarkGrayText } from "../Custom/Text";

const GradientCard = ({ children, gradientColors }) => {
  return (
    <div
      style={{
        marginTop: "20px",
        width: "100%",
        height: "86px",
        alignItems: "center",
        background: `linear-gradient(239.25deg, ${gradientColors.join(", ")})`,
        borderRadius: "14px",
      }}
    >
      {children}
    </div>
  );
};

const Mypick = () => {
  return (
    <div className="w-8 h-[86px] font-bold text-center justify-center flex items-center rounded-r-2xl  bg-[#32CDB3]">
      <div
        className="vertical-text"
        style={{
          writingMode: "vertical-rl",
          transform: "rotate(180deg)",
        }}
      >
        My pick
      </div>
    </div>
  );
};

const Blank = () => {
  return (
    <div className="w-8 h-[86px] font-bold text-center justify-center flex items-center rounded-r-2xl">
      <div
        className="vertical-text"
        style={{
          writingMode: "vertical-rl",
          transform: "rotate(180deg)",
        }}
      ></div>
    </div>
  );
};

const GradientCardFirm = ({
  rank,
  name,
  percentage,
  multiplier,
  imageSrc,
  mypick,
  gradientColors,
  TextComponent,
  rightText,
}) => (
  <GradientCard gradientColors={gradientColors}>
    <div className="w-full h-full flex justify-between rounded-2xl hover:shadow-[#32CDB3] hover:shadow-[0_0_20px_4px_rgba(0,0,0,0.5)]">
      <div className="flex p-[15px] justify-between w-full h-full items-center">
        <div className="flex justify-between w-full items-center">
          <div className="flex justify-between gap-2 items-center">
            <div className="w-[60px]">
              <img src={imageSrc} alt={name} />
            </div>
            <div className="flex flex-col justify-between items-stretch gap-2">
              <div className="flex justify-around items-center gap-2">
                <TextComponent className="bg-white p-1 rounded-md">
                  {rank}
                </TextComponent>
                <TextComponent>{name}</TextComponent>
              </div>
              <TextComponent>+{percentage}%</TextComponent>
            </div>
          </div>
          <div className="text-right">{rightText}</div>
        </div>
      </div>
      {mypick}
    </div>
  </GradientCard>
);

const BrownGradientCardFirm = (props) => (
  <GradientCardFirm
    {...props}
    gradientColors={[
      "#E8C670 22.13%",
      "#F1D58F 36.13%",
      "#E8C670 48.08%",
      "#FBE3AA 62.08%",
      "#E8C670 82.9%",
    ]}
    TextComponent={BrownText}
  />
);

const GrayGradientCardFirm = (props) => (
  <GradientCardFirm
    {...props}
    gradientColors={[
      "#AFAFAF 22.13%",
      "#CBCBCB 36.13%",
      "#BDBDBD 48.08%",
      "#F2F2F2 62.08%",
      "#B5B5B5 82.9%",
    ]}
    TextComponent={DarkGrayText}
  />
);

const DarkBrownGradientCardFirm = (props) => (
  <GradientCardFirm
    {...props}
    gradientColors={[
      "#935824 22.13%",
      "#A98866 36.13%",
      "#FFC686 48.08%",
      "#D6AE75 62.08%",
      "#927144 82.9%",
    ]}
    TextComponent={DarkGrayText}
  />
);

export {
  GradientCard,
  BrownGradientCardFirm,
  GrayGradientCardFirm,
  Mypick,
  DarkBrownGradientCardFirm,
  Blank,
};
