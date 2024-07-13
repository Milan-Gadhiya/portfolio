import React from "react";
import Header from "../Components/header/Header";
// import { useSelector } from "react-redux";

export default function WebsiteScreen(props) {
  // const websiteLists = useSelector((state) => state.websiteLists);
  // const { loading, error, apps } = websiteLists;

  return (
    <>
      <Header />

      <div className="banner">
        <div className="overlay">
          <div className="container">
            <h1>My Recent Websites</h1>
            <button>
              <a href="/">Home</a>
            </button>
          </div>
        </div>
      </div>

      <div className="container blogcontainer">
        {/* {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div className="row">
            {websites.map((website) => (
              <Website key={website._id} website={website} />
            ))}
          </div>
        )} */}
      </div>
    </>
  );
}
