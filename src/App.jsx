import React from "react";
import Core from "./core/core";
import Background from "../public/images/pattern-desktop.svg";
import Background2 from "../public/images/pattern-mobile.svg";

function App() {
   return (
      <div
         className=" h-full w- pb-14 bg-auto bg-indigo-200 bg-no-repeat"
         style={{
            backgroundImage: `url(${Background})`,
         }}
      >
         <Core />
      </div>
   );
}

export default App;
