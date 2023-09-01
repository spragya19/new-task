import React from "react";

import TransactionTable from "../../components/dashboard/TransactionTable";

import { AiOutlineDollarCircle } from "react-icons/ai";
import { BsGraphUpArrow } from "react-icons/bs";

const Dashboard = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="flex gap-5 mb-10">
        <div className="bg-[#bfc7e8] p-6  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] rounded-lg w-kit">
          <div className="flex items-center gap-5">
            <div className="bg-[#e5f3ff] w-12 h-12 flex rounded-sm justify-center items-center">
              <div className="text-2xl text-[#0078ff]">
                <AiOutlineDollarCircle />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div>
                <span className="text-3xl text-[#0078ff] font-semibold">
                  300k
                </span>
                <span className="text-black font-semibold text-lg ml-2">
                  USD
                </span>
              </div>
              <div>
                <span className="flex items-center gap-3 text-[#20a07f] text-lg font-semibold">
                  1.25% <BsGraphUpArrow />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#bfc7e8] p-6  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] rounded-lg w-kit">
          <div className="flex items-center gap-5">
            <div className="bg-[#e5f3ff] w-12 h-12 flex rounded-sm justify-center items-center">
              <div className="text-2xl text-[#0078ff]">
                <AiOutlineDollarCircle />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div>
                <span className="text-3xl text-[#0078ff] font-semibold">
                  300k
                </span>
                <span className="text-black font-semibold text-lg ml-2">
                  USD
                </span>
              </div>
              <div>
                <span className="flex items-center gap-3 text-[#20a07f] text-lg font-semibold">
                  1.25% <BsGraphUpArrow />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#bfc7e8] p-6  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] rounded-lg w-kit">
          <div className="flex items-center gap-5">
            <div className="bg-[#e5f3ff] w-12 h-12 flex rounded-sm justify-center items-center">
              <div className="text-2xl text-[#0078ff]">
                <AiOutlineDollarCircle />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div>
                <span className="text-3xl text-[#0078ff] font-semibold">
                  300k
                </span>
                <span className="text-black font-semibold text-lg ml-2">
                  USD
                </span>
              </div>
              <div>
                <span className="flex items-center gap-3 text-[#20a07f] text-lg font-semibold">
                  1.25% <BsGraphUpArrow />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TransactionTable />
    </div>
  );
};

export default Dashboard;
