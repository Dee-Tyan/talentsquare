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
import abuja from "../../assets/abuja.svg";


const VAccount = () => {
  return (
    <div className="pl-60">
      <div className="pr-4">
        <img src={vad} className="mb-12 mt-8" />
      </div>

      <div class=" w-2/3">
        <img src={generated} />
      </div>

      <div className="mt-8 py-12 px-4 w-2/3 bg-white">
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
              <td>
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
              <td>
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
              <td>
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
              <td>
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
  );
};

export default VAccount;
