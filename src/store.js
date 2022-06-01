import React, { useState, useRef, useEffect } from "react";


export const StoreContext = React.createContext(null);

export default ({ children }) => {
  


  const store = {
  {ogg: "sgsg"}
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
