import React from "react";
import gtb from "../../assets/gtb.svg";
import acc from "../../assets/accview.svg";
import dodo from "../../assets/dodo.svg";

const AF = () => {
  return (
    <div class=" bg-white">
      <div class="w-96 px-4">
        <div className="flex justify-between">
          <h3 className="text-sm font-bold">
            Activity Feed <span className="text-dgrey">- GT Bank </span>
          </h3>
          <div className="flex flex-row items-center">
            <h6 className="green-500 text-xs"> Active</h6>
            <h6 className="text-xs ml-2">
          . Created 16days ago
          </h6>
          </div>
        </div>
        
        <div className="h-8 bg-gto relative">
           <img src={gtb} className="absolute top-4 left-2"/>
        </div>

        <div className="flex justify-between mt-8 mb-4">
          <div>
            <p className="text-sm mb-2">Guaranty Trust Bank</p>
            <p className="text-xs">209630**83</p>
          </div>

          <img src={acc} className='' />

        </div>

        <hr/>
        
        <div className="flex justify-between mt-4">

            <div >
                <p className="text-dgrey text-xs">Total Inflow</p>
                <p className="text-sm">₦77,823.00</p>
            </div>

            <div >
                <p className="text-dgrey text-xs">Last Activity Date</p>
                <p className="text-sm">13th Sept. 2022</p>
            </div>

            <div >
                <p className="text-dgrey text-xs">Linked Branch</p>
                <img src={dodo} />
            </div>

        </div>

        <div className="flex justify-between py-4">
              <h3 className="text-dgrey text-xs">Transaction Details</h3>
              <h3 className="text-dgrey text-xs">Amount</h3>
              <h3 className="text-dgrey text-xs">Date</h3>
        </div>
        
        <table className="w-full">
          <tbody className="text-xs">
             <tr className="">
                <td>Olaoluwa S.</td>
                <td>₦6,720.00</td>
                <td>Today, 8mins ago</td>
                <td> {">"} </td>
             </tr>
             <tr>
                <td>Olaoluwa S.</td>
                <td>₦6,720.00</td>
                <td>Today, 8mins ago</td>
                <td> {">"} </td>
             </tr>
             <tr>
                <td>Olaoluwa S.</td>
                <td>₦6,720.00</td>
                <td>Today, 8mins ago</td>
                <td> {">"} </td>
             </tr>
             <tr>
                <td>Olaoluwa S.</td>
                <td>₦6,720.00</td>
                <td>Today, 8mins ago</td>
                <td> {">"} </td>
             </tr><tr>
                <td>Olaoluwa S.</td>
                <td>₦6,720.00</td>
                <td>Today, 8mins ago</td>
                <td> {">"} </td>
             </tr>

          </tbody>

        </table>
      </div>
    </div>
  );
};

export default AF;
