import React from "react";
import "../components/Main.css";
import { Link } from "react-router-dom";
export default function Main() {
  return (
    <div className="main1">
      <div className="cont1">
        <Link to="/croplist">
          <div className="container1">Crop List</div>
        </Link>
        <div className="disc">
          Select the type of the soil and get the list of crops that can be
          grown in that selected soil
        </div>
      </div>
      <hr />
      <div className="cont2">
        <Link to="/fertilizers">
          <div className="container2">Fertilizers</div>
        </Link>
        <div className="disc">
          Select the type of the soil and the crop to be grown in that soil and
          get the suitable Fertilizer to be applied
        </div>
      </div>
      <hr />

      <div className="cont3">
        <Link to="/diseases">
          <div className="container3">Diseases</div>
        </Link>
        <div className="disc">
          Select the crop and find the various diseases associated with that
          selected crop
        </div>
      </div>
      <hr />

      <div className="cont4">
        <Link to="/pesticides">
          <div className="container4">Pesticides</div>
        </Link>
        <div className="disc">
          Select the crop name and the disease name and get the suitable
          pesticide to be applied to control the disease
        </div>
      </div>
    </div>
  );
}
