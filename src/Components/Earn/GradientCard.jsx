import React from "react";

const BrownGradientCard = ({ children }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "86px",
        // padding: "15px",

        alignItems: "center",
        background:
          "linear-gradient(262.25deg, #E8C670 22.13%, #F1D58F 36.13%, #E8C670 48.08%, #FBE3AA 62.08%, #E8C670 82.9%)",
        borderRadius: "14px",
      }}
    >
      {children}
    </div>
  );
};

const GrayBrownGradientCard = ({ children }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "86px",
        padding: "20px",
        display: "flex",
        alignItems: "center",
        background:
          "linear-gradient(262.25deg, #AFAFAF 22.13%, #CBCBCB 36.13%, #BDBDBD 48.08%, #F2F2F2 62.08%, #B5B5B5 82.9%)",
        borderRadius: "14px",
      }}
    >
      {children}
    </div>
  );
};

export { BrownGradientCard, GrayBrownGradientCard };
