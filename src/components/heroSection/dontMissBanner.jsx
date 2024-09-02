import austinBanner from "../../assets/austin.jpg";

export const DontMissBanner = () => {
  return (
    <>
      <section className="mt-20">
        <div className="px-[1.2rem] lg:px-12">
          <h2 className="mb-4 text-[24px] font-semibold">Don't Miss</h2>
          <img
            src={austinBanner}
            alt=""
            className="h-[65vh] w-full object-cover"
          />
          <div className="flex flex-col items-center justify-center">
            <p
              style={{ fontFamily: "miland" }}
              className="text-[6vw] font-medium"
            >
              JORDAN SPORT
            </p>
            <p className="text-center">
              Rooted in basketball, influenced by street culture. Jazz Chisholm
              and Guard Rhyne Howard stunt in elevated pieces designed to
              complement performance and style.
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
