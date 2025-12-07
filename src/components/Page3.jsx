import React from "react";

export default function Page3() {
  return (
    <div className="page3">
      <div className="top">
        <div className="left">
          <div className="imgBox">
            <img src="/src/images/sm image1.png" alt="sm1" />
          </div>
          <div className="imgBox">
            <img src="/src/images/sm image 2.png" alt="sm2" />
          </div>
        </div>
        <div className="right">
          <p>
            A place where you can be with yourself and your loved ones. A place
            where you can experience unforgettable desert things.
          </p>
        </div>
      </div>
      <div className="bottom">
        <div className="hideBox">
          <h2>Choose the one</h2>
          <div className="hide"></div>
        </div>
        <div className="hideBox">
          <h2>you like best</h2>
          <div className="hide"></div>
        </div>
        <p>
          You can choose one of three premium capsule houses in our offer. Each
          of our capsules provides the highest quality and meets the standards
          adjusted to your needs. Choose the one you like.
        </p>
      </div>
    
    </div>
  );
}
