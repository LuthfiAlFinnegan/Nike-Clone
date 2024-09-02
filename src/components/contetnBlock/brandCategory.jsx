export const BrandCategory = () => {
  return (
    <>
      <section>
        <div className="my-10 flex flex-col justify-between px-[1.2rem] md:flex-row">
          <nav className="flex flex-col text-[#707072]">
            <h6 className="mb-4 text-xl font-semibold text-black">Icons</h6>
            <div className="hidden flex-col space-y-4 md:flex">
              <a>Air Force 1</a>
              <a>Huarache</a>
              <a>Air Max 90</a>
              <a>Air Max 95</a>
            </div>
          </nav>
          <nav className="flex flex-col text-[#707072]">
            <h6 className="mb-4 text-xl font-semibold text-black">Shoes</h6>
            <div className="hidden flex-col space-y-4 md:flex">
              <a>All Shoes</a>
              <a>Custom Shoes</a>
              <a>Jordan Shoes</a>
              <a>Running Shoes</a>
            </div>
          </nav>
          <nav className="flex flex-col text-[#707072]">
            <h6 className="mb-4 text-xl font-semibold text-black">Clothing</h6>
            <div className="hidden flex-col space-y-4 md:flex">
              <a>All Clothing</a>
              <a>Modest Wear</a>
              <a>Hoodies & Pullovers</a>
              <a>Shirts & Tops</a>
            </div>
          </nav>
          <nav className="flex flex-col text-[#707072]">
            <h6 className="mb-4 text-xl font-semibold text-black">Kids'</h6>
            <div className="hidden flex-col space-y-4 md:flex">
              <a>Infant & Toddler Shoes</a>
              <a>Kids' Shoes</a>
              <a>Kids' Jordan Shoes</a>
              <a>Kids' Basketball Shoes</a>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
};
