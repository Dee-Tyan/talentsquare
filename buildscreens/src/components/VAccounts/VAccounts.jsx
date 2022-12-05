import React from "react";
import vad from "../../assets/vad.svg";
import generated from "../../assets/generated.svg";
import licons from "../../assets/licons.svg";
import search from "../../assets/search.svg";
import branch from "../../assets/branch.svg";
import manage from "../../assets/manage.svg";
import polaris from "../../assets/polaris.svg";
import copy from "../../assets/copy.svg";
import ikeja from "../../assets/ikeja.svg";
import more from "../../assets/more.svg";
import gtb from "../../assets/gtb.svg";
import pb from "../../assets/pb.svg";
import fb from "../../assets/fb.svg";
import dodo from "../../assets/dodo.svg";
import acc from "../../assets/accview.svg";
import abuja from "../../assets/abuja.svg";

const VAccount = () => {
  return (
    <div className="">
      <img src={vad} className='pl-60 py-10 px-4' />
      <div className="flex row pl-60 px-4 pb-16">
        <div className="w-2/3">
          <img src={generated} />
          <div className="mt-8 py-12 px-4 bg-white">
            <div className="flex justify-between">
              <h3>Your Virtual Accounts</h3>
              <img src={licons} />
            </div>

            <div className="flex justify-between my-4">
              <img src={branch} />
              <img src={search} />
            </div>

            <hr />

            <div className="flex justify-between py-2">
              <h4 className="font-bold">Lekki II</h4>
              <img src={manage} />
            </div>

            <div className="flex justify-between px-24">
              <h3 className="text-dtext">Bank Name</h3>
              <h3 className="text-dtext">Account Number</h3>
              <h3 className="text-dtext">Total Inflow</h3>
            </div>

            <table className="w-full text-xs">
              <tbody>
                <tr className="">
                  <td className="py-2">
                    <img src={polaris} />
                  </td>

                  <td>Polaris Bank Limited</td>

                  <td>08023221144</td>

                  <td>
                    <img src={copy} className=" px-16" />
                  </td>

                  <td>
                    <img src={ikeja} />
                  </td>

                  <td>NGN100,000.00</td>

                  <td>
                    <img src={more} className="text-center px-16" />
                  </td>
                </tr>

                <tr className="">
                  <td className="py-2">
                    <img src={gtb} />
                  </td>

                  <td>Guaranty Trust Holding</td>

                  <td>08023221144</td>

                  <td className="text-blue pl-8">Copied</td>

                  <td>
                    <img src={dodo} />
                  </td>

                  <td>NGN100,000.00</td>

                  <td>
                    <img src={more} className="text-center px-16" />
                  </td>
                </tr>

                <tr className="">
                  <td className="py-2">
                    <img src={pb} />
                  </td>

                  <td>Providus Bank PLC</td>

                  <td>08023221144</td>

                  <td>
                    <img src={copy} className=" px-16" />
                  </td>

                  <td>
                    <img src={dodo} />
                  </td>

                  <td>NGN100,000.00</td>

                  <td>
                    <img src={more} className="text-center px-16" />
                  </td>
                </tr>

                <tr className="">
                  <td className="">
                    <img src={fb} />
                  </td>

                  <td>First Bank of Nigeria</td>

                  <td>08023221144</td>

                  <td>
                    <img src={copy} className=" px-16" />
                  </td>

                  <td>
                    <img src={abuja} />
                  </td>

                  <td>NGN100,000.00</td>

                  <td>
                    <img src={more} className="text-center px-16" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class=" pl-8">
          <div class="w-96 px-4 bg-white pt-8 rounded-lg">
            <div className="flex justify-between">
              <h3 className="text-sm font-bold">
                Activity Feed <span className="text-dgrey">- GT Bank </span>
              </h3>
              <div className="flex flex-row items-center">
                <h6 className="text-green text-xs"> Active</h6>
                <h6 className="text-xs ml-2">. Created 16days ago</h6>
              </div>
            </div>

            <div className="h-8 bg-gto relative">
              <img src={gtb} className="absolute top-4 left-2" />
            </div>

            <div className="flex justify-between mt-8 mb-4">
              <div>
                <p className="text-sm mb-2">Guaranty Trust Bank</p>
                <p className="text-xs">209630**83</p>
              </div>

              <img src={acc} className="" />
            </div>

            <hr />

            <div className="flex justify-between mt-4">
              <div>
                <p className="text-dgrey text-xs">Total Inflow</p>
                <p className="text-sm">₦77,823.00</p>
              </div>

              <div>
                <p className="text-dgrey text-xs">Last Activity Date</p>
                <p className="text-sm">13th Sept. 2022</p>
              </div>

              <div>
                <p className="text-dgrey text-xs">Linked Branch</p>
                <img src={dodo} />
              </div>
            </div>

            <div className="flex justify-between py-4">
              <h3 className="text-dgrey text-xs">Transaction Details</h3>
              <h3 className="text-dgrey text-xs">Amount</h3>
              <h3 className="text-dgrey text-xs">Date</h3>
            </div>

            <table className="w-full mb-32">
              <tbody className="text-xs">
                <tr>
                  <td className="py-2">Olaoluwa S.</td>
                  <td>₦6,720.00</td>
                  <td>Today, 8mins ago</td>
                  <td> {">"} </td>
                </tr>
                <tr className="gap-2">
                  <td className="py-2">Olaoluwa S.</td>
                  <td>₦6,720.00</td>
                  <td>Today, 8mins ago</td>
                  <td> {">"} </td>
                </tr>
                <tr>
                  <td className="py-2">Olaoluwa S.</td>
                  <td>₦6,720.00</td>
                  <td>Today, 8mins ago</td>
                  <td> {">"} </td>
                </tr>
                <tr>
                  <td className="py-2">Olaoluwa S.</td>
                  <td>₦6,720.00</td>
                  <td>Today, 8mins ago</td>
                  <td> {">"} </td>
                </tr>
                <tr>
                  <td className="py-2">Olaoluwa S.</td>
                  <td>₦6,720.00</td>
                  <td>Today, 8mins ago</td>
                  <td> {">"} </td>
                </tr>
              </tbody>
            </table>

            <div className="mb-24">
               <p className="text-white">.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VAccount;
