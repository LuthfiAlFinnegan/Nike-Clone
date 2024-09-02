import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { AssetImageProduct } from "../../utils/assetImageProduct";
import { CarouselFunction } from "../../utils/carouselFunction";

export const ClassicSpotlight = () => {
  const { newestItems, featuredItems, classicItems } = AssetImageProduct();
  const { classicIndex, handleClassicPrevClick, handleClassicNextClick } =
    CarouselFunction(
      newestItems.length,
      featuredItems.length,
      classicItems.length,
    );
  return (
    <>
      <section className="mt-20 space-y-4">
        <div className="flex items-center justify-between px-[1.2rem] lg:px-12">
          <h2 className="text-[24px] font-semibold">Classics Spotlight </h2>
          <div className="flex items-center space-x-3">
            <div
              onClick={handleClassicPrevClick}
              className={`cursor-pointer rounded-full duration-300 ${classicIndex === 0 ? "bg-[#F5F5F5] text-[#CACACB]" : "bg-[#E5E5E5]"} p-4`}
            >
              <MdOutlineArrowBackIos />
            </div>
            <div
              onClick={handleClassicNextClick}
              className={`cursor-pointer rounded-full duration-300 ${classicIndex === classicItems.length - 3 ? "bg-[#F5F5F5] text-[#CACACB]" : "bg-[#E5E5E5]"} p-4`}
            >
              <MdOutlineArrowForwardIos />
            </div>
          </div>
        </div>
        {/* Featured Carousel */}
        <div className="relative overflow-hidden px-[1.2rem] lg:px-12">
          <div
            style={{
              transform: `translateX(-${classicIndex * 393}px)`,
            }}
            className="flex w-fit space-x-1 transition-transform duration-700 md:space-x-3"
          >
            {classicItems.map((item, idx) => (
              <div
                key={idx}
                className="flex h-[26rem] w-[20rem] flex-shrink-0 flex-col justify-between md:h-[29.5rem] md:w-[23.8rem]"
              >
                <figure className="w-[19.5rem] md:h-[23.8rem] md:w-[23.8rem]">
                  <img
                    src={item.image}
                    alt=""
                    className="h-full w-full object-contain"
                  />
                  <h5
                    style={{ fontFamily: "miland" }}
                    className="absolute mt-4 w-full text-2xl"
                  >
                    {item.name}
                  </h5>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
