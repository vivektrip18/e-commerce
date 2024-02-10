import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { mens_shoes } from "../../../data/mens_shoes";

const HomeSectionCarousel = ({sectionName}) => {
  const [activeIndex,setActiveIndex] = useState(0);
  const responsive = {
    0: { items: 1 },
    320: { items: 2 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };
  const slidePrev=()=>setActiveIndex(activeIndex-1)
  const slideNext=()=>setActiveIndex(activeIndex+1)
  const syncActiveIndex=({item})=>setActiveIndex(item)

  const items = mens_shoes.map((item) => <HomeSectionCard  product={item}/>);
  return (
    <div className="relative px-4 lg:px-8 border-black">
      <h2 className="text-2xl font-extrabold text-gray-800 py-1">{sectionName}</h2>
      <div className="relative p-5 border">
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
        {activeIndex!==items.length-5 && <Button
          variant="contained"
          className="z-50 bg-white"
          onClick={slideNext}
          sx={{
            position: "absolute",
            top: "8rem",
            right: "0rem",
            transform: "translateX(50%) rotate(90deg)",
            bgcolor: "white",
          }}
        >
          <ArrowBackIosNewIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button>}
      </div>
      {activeIndex!==0 && <Button
        variant="contained"
        className="z-50 bg-white"
        onClick={slidePrev}
        sx={{
          position: "absolute",
          top: "10.5rem",
          left: "0rem",
          transform: "translateX(50%) rotate(90deg)",
          bgcolor: "white",
        }}
      >
        <ArrowBackIosNewIcon
          sx={{ transform: "rotate(-90deg)", color: "black" }}
        />
      </Button>}
    </div>
  );
};
export default HomeSectionCarousel;
