import React from "react";

export default function Page4() {
  return (
    <div className="page4">
      <div className="slider">
        <div className="box" style={{ "--time": "24s", "--quantity": 6 }}>
          <h3 style={{ "--index": 1 }}>Capsules®</h3>
          <h3 style={{ "--index": 2 }}>Capsules®</h3>
          <h3 style={{ "--index": 3 }}>Capsules®</h3>
          <h3 style={{ "--index": 4 }}>Capsules®</h3>
          <h3 style={{ "--index": 5 }}>Capsules®</h3>
          <h3 style={{ "--index": 6 }}>Capsules®</h3>
        </div>
      </div>

      <div className="background">
        <img src="/src/images/background2.png" alt="bg2" />
        <div className="topText">
          <h4>ClassicCapsule®</h4>
          <h3>(Scroll)</h3>
        </div>
        <div className="bottomText">
          <h3>
            Classic Capsule® boasts refined aesthetics and a modern interior
            creating an intimate retreat in a desert landscape
          </h3>
        </div>
      </div>

      <div id="second" className="background2">
        <img src="/src/images/background3.png" alt="bg3" />
        <div className="topText">
          <h4>Terrace Capsule®</h4>
          <h3>(Scroll)</h3>
        </div>
        <div className="bottomText">
          <h3>
            Classic Capsule® boasts refined aesthetics and a modern interior
            creating an intimate retreat in a desert landscape
          </h3>
        </div>
      </div>

      <div id="third" className="background2">
        <img src="/src/images/background4.png" alt="bg4" />
        <div className="topText">
          <h4>Desert Capsule®</h4>
          <h3>(Scroll)</h3>
        </div>
        <div className="bottomText">
          <h3>
            Classic Capsule® boasts refined aesthetics and a modern interior
            creating an intimate retreat in a desert landscape
          </h3>
        </div>
      </div>
    </div>
  );
}
