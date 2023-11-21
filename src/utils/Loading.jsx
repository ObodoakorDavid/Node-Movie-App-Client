import React, { useState, CSSProperties } from "react";
import { BarLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Loading = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#fc4747");
  return (
    <div className="my-5">
      <BarLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={30}
        speedMultiplier={1}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
