import BannerShoes from "../../assets/nike-pegasus.jpg";

export const NewArrivalsBanner = () => {
  return (
    <>
      <section>
        <div className="flex h-[3.6rem] flex-col items-center justify-center bg-[#F5F5F5]">
          <p className="hidden md:block">New Styles on Sale: Up to 40 % Off</p>
          <p className="hidden text-[12px] underline md:block">
            Shop All Our New Markdowns
          </p>
        </div>
        <div className="px-[1.2rem] lg:px-12">
          <img
            src={BannerShoes}
            alt=""
            className="h-[23.6rem] w-full object-cover md:h-[65vh]"
          />
          <div className="flex flex-col justify-center py-7 md:items-center">
            <p className="font-semibold">Nike Pegasus 41</p>
            <p
              style={{ fontFamily: "miland" }}
              className="text-[6vw] font-medium"
            >
              DON'T WASTE YOUR ENERGY
            </p>
            <p>
              Run in Pegasus. Feel the responsive energy return of Air Zoom and
              all-new ReactX foam.
            </p>
            <div className="my-8 flex h-[2.5rem] w-fit cursor-pointer items-center justify-center rounded-full bg-black px-6 pb-0.5 font-semibold text-white hover:bg-[#707070] md:w-[6vw] md:px-10">
              Shop
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
