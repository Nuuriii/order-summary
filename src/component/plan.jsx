import React from "react";

function Plan() {
   return (
      <div className="justify-center m-5">
         <div className="flex justify-between bg-slate-100 rounded-xl p-5">
            <div className="flex">
               <img src="./images/icon-music.svg" alt="music icon" />
               <div className="ml-5">
                  <p className="font-bold">Annual Plan</p>
                  <p className="font-bold text-slate-500 ">$59.99/year</p>
               </div>
            </div>
            <div className="flex">
               <button className="font-bold underline text-blue-800 hover:no-underline hover:text-blue-600">
                  Change
               </button>
            </div>
         </div>
      </div>
   );
}

export default Plan;
