import React from "react";
import Devider from "../Devider";

const TabList = ({ children, classData, scrollLeft, scrollRight, props }) => {
  return (
    <>

      <div className={`py-2 flex gap-4 ${classData}`} {...props}>
        {children}
      </div>
      <Devider />
    </>
  );
};

export default TabList;
