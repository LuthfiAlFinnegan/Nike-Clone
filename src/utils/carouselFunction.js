import { useState } from "react";

export const CarouselFunction = (newestLength, featuredLength, brandLength) => {
  const [newestIndex, setNewestIndex] = useState(0);
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [classicIndex, setClassicIndex] = useState(0);

  const handleNewestPrevClick = () => {
    setNewestIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const handleNewestNextClick = () => {
    if (newestIndex < newestLength - 3) {
      setNewestIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleFeaturedPrevClick = () => {
    setFeaturedIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex,
    );
  };

  const handleFeaturedNextClick = () => {
    if (featuredIndex < featuredLength - 3) {
      setFeaturedIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleClassicPrevClick = () => {
    setClassicIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };
  const handleClassicNextClick = () => {
    if (classicIndex < brandLength - 3) {
      setClassicIndex((prevIndex) => prevIndex + 1);
    }
  };

  return {
    newestIndex,
    handleNewestPrevClick,
    handleNewestNextClick,
    featuredIndex,
    handleFeaturedPrevClick,
    handleFeaturedNextClick,
    classicIndex,
    handleClassicPrevClick,
    handleClassicNextClick,
  };
};
