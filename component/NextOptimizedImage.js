import React from "react";

const NextOptimizedImage = ({ img_props }) => {
  console.log(img_props);
  return (
    <div>
      Next Optimized Image
      <div>
        <div>
          <img src={img_props.src} />
        </div>
      </div>
    </div>
  );
};

export default NextOptimizedImage;
