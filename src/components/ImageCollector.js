import React, { useState, useEffect } from "react";

const ImageCollector = ({ image = [{ url: "" }] }) => {
  
  
  const [myimage , setMyimage] = useState(image[0]);

  

  useEffect(() => {
    setMyimage(image[0]);
  }, [image]);

  return (
    <div className="flex items-center justify-cente  image-collector">
      <div className=" image-collector-multiple">
        {image.map((current, index) => {
          return (
            <figure key={index}>
              <img
                className="w-[200px] image-single p-3 cursor-pointer"
                src={current.url}
                alt={current.filename}
                onClick={()=>{setMyimage(current)}}
              />
            </figure>
          );
        })}
      </div>

      <div>
        <img src={myimage.url} width={400} alt={myimage.filename} />
      </div>
    </div>
  );
};

export default ImageCollector;

