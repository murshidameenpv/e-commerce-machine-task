
const Home = () => {
  return (
    <div className="section-container mx-auto max-w-screen-2xl xl:px-24 bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100% mt-8">
      <div className="py-24 flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        {/* images */}
        <div className="md:w-1/2">
          <div className="flex flex-col md:flex-row justify-around items-center gap-10">
            <div className="flex bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-80">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/008/550/314/small/headphone-device-electronic-icon-3d-illustration-png.png"
                alt="img"
                className="rounded-2xl"
              />
              <div className="space-y-1">
                <h5 className="font-medium mb-1">Sony Headphone</h5>
                <div className="rating rating-xs">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                </div>
                <p className="text-amber-900">$17.99</p>
              </div>
            </div>
            <div className="sm:flex hidden bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-80">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/008/550/314/small/headphone-device-electronic-icon-3d-illustration-png.png"
                alt="img"
                className="rounded-2xl"
              />
              <div className="space-y-1">
                <h5 className="font-medium mb-1">Boat Heafphone</h5>
                <div className="rating rating-xs">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                </div>
                <p className="text-amber-900">$20.99</p>
              </div>
            </div>
          </div>
        </div>
        {/* texts */}
        <div className="md:w-1/2 space-y-7 px-5">
          <h2 className="md:text-5xl font-bold text-4xl md:leading-snug leading-snug">
            Wear your <span className="text-green">confidence</span>, not just{" "}
            <span className="text-green">clothes</span>
          </h2>
          <p className="text-xl text-[#4A4A4A]">
            Unleash your inner fashionista with our premium designs
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home