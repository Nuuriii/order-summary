import React from "react";
import Image from "../component/image";
import Order from "../component/order";
import Plan from "../component/plan";
import Proces from "../component/proceed";
import Cancel from "../component/cancel";

function Core() {
   return (
      <div className="flex justify-center">
         <div className="ml-5 mr-5 mt-16 rounded-2xl overflow-hidden bg-white">
            <Image />
            <Order />
            <Plan />
            <Proces />
            <Cancel />
         </div>
      </div>
   );
}

export default Core;
