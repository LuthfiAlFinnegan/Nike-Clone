import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { AssetImageProduct } from "../../utils/assetImageProduct";
import { CarouselFunction } from "../../utils/carouselFunction";

export const Promotional = () => {
  const { newestItems, featuredItems } = AssetImageProduct();
  const {
    newestIndex,
    handleNewestPrevClick,
    handleNewestNextClick,
    featuredIndex,
    handleFeaturedPrevClick,
    handleFeaturedNextClick,
  } = CarouselFunction(newestItems.length, featuredItems.length);

  return (
    <>
      {/* NEWEST */}
      <section className="md:space-y-4">
        <div className="flex items-center justify-between px-[1.2rem] lg:px-12">
          <h2 className="text-[24px] font-semibold">Newest of the Season</h2>
          <div className="flex items-center space-x-3">
            <span className="hidden font-semibold md:block">Shop</span>
            <div
              onClick={handleNewestPrevClick}
              className={`cursor-pointer rounded-full duration-300 ${newestIndex === 0 ? "cursor-default bg-[#F5F5F5] text-[#CACACB]" : "bg-[#E5E5E5] hover:bg-[#CACACB]"} p-4`}
            >
              <MdOutlineArrowBackIos />
            </div>
            <div
              onClick={handleNewestNextClick}
              className={`cursor-pointer rounded-full duration-300 ${newestIndex === newestItems.length - 3 ? "cursor-default bg-[#F5F5F5] text-[#CACACB]" : "bg-[#E5E5E5] hover:bg-[#CACACB]"} p-4`}
            >
              <MdOutlineArrowForwardIos />
            </div>
          </div>
        </div>
        {/* Newest Carousel */}
        <div className="relative overflow-hidden px-[1.2rem] lg:px-12">
          <div
            style={{
              transform: `translateX(-${newestIndex * 393}px)`,
            }}
            className="flex w-fit space-x-1 transition-transform duration-700 md:space-x-3"
          >
            {newestItems.map((item, idx) => (
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
                </figure>
                <div className="md:p-2">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-[#707072]">{item.description}</p>
                </div>
                <p className="font-semibold md:p-2">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="mt-20 space-y-4">
        <div className="flex items-center justify-between px-[1.2rem] lg:px-12">
          <h2 className="text-[24px] font-semibold">Featured</h2>
          <div className="flex items-center space-x-3">
            <div
              onClick={handleFeaturedPrevClick}
              className={`cursor-pointer rounded-full duration-300 ${featuredIndex === 0 ? "bg-[#F5F5F5] text-[#CACACB]" : "bg-[#E5E5E5]"} p-4`}
            >
              <MdOutlineArrowBackIos />
            </div>
            <div
              onClick={handleFeaturedNextClick}
              className={`cursor-pointer rounded-full duration-300 ${featuredIndex === featuredItems.length - 3 ? "bg-[#F5F5F5] text-[#CACACB]" : "bg-[#E5E5E5]"} p-4`}
            >
              <MdOutlineArrowForwardIos />
            </div>
          </div>
        </div>
        {/* Featured Carousel */}
        <div className="relative overflow-hidden px-[1.2rem] lg:px-12">
          <div
            style={{
              transform: `translateX(-${featuredIndex * 393}px)`,
            }}
            className="flex w-fit space-x-3 transition-transform duration-700"
          >
            {featuredItems.map((item, idx) => (
              <div
                key={idx}
                className="flex h-[577.719px] w-[381.104px] flex-shrink-0 flex-col justify-between"
              >
                <figure className="w-[22rem] md:h-[23.8rem] md:w-[23.8rem]">
                  <img
                    src={item.image}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </figure>
                <p className="text-xl font-semibold">{item.name}</p>
                <div className="w-fit cursor-pointer border-b-2 border-black font-semibold hover:border-[#707072] hover:text-[#707072]">
                  Shop
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
