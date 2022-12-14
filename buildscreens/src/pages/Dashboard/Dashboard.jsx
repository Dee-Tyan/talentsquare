import React from "react";
import Header from "../../components/Header/Header";
import SideNav from "../../components/SideNav/SideNav";
import VAccount from "../../components/VAccounts/VAccounts";


const Dashboard = () => {
  return (
    <div className="fixed bg-bgcolor">
      <Header/>
      <SideNav />
      <VAccount />
    </div>
  );
};

export default Dashboard;
