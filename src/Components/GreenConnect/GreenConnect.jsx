import React from "react";
import GreenConnectLogo from "../../assets/green-connect.png";
import { Link } from "react-router";
const GreenConnect = () => {
  return (
    <Link to="/" className="flex items-center">
      <img src={GreenConnectLogo} className="w-10 h-10 mr-2" alt="Green Connect Logo" />
      <h3 className="text-sm font-bold">Green Connect</h3>
    </Link>
  );
};

export default GreenConnect;
