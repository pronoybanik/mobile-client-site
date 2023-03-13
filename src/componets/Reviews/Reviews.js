import React from "react";

const Reviews = () => {
  return (
    <div>
      <div className='my-28 font-serif ml-6' data-aos="zoom-in-down">
        <div className="text-4xl font-bold text-center my-12 font-serif text-gray-600 uppercase">
          {" "}
          Reviews
        </div>

        <div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 my-8">
            {/* fast card */}
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="avatar">
                  <div className="w-20 rounded-full">
                    <img
                      src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <p>
                  “ Their Service is always perfect, and the staff is very
                  friendly and accommodating. Always looking forward to this
                  place with my friends, the fried vanilla ice cream is
                  exceptionally photographer“
                </p>

                <div className="flex justify-between mt-3">
                  <div>
                    <h2 className="card-title">Emma Watson</h2>
                    <p>Hollywood</p>
                  </div>

                  <div className="rating rating-md mt-2">
                    <input
                      type="radio"
                      name="rating-7"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-7"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-7"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-7"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-7"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* second card */}

            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="avatar">
                  <div className="w-20 rounded-full">
                    <img
                      src="https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <p>
                  “ Their Service is always perfect, and the staff is very
                  friendly and accommodating. Always looking forward to this
                  place with my friends, the fried vanilla ice cream is
                  exceptionally photographer“
                </p>

                <div className="flex justify-between mt-3">
                  <div>
                    <h2 className="card-title">Aliya Bhat</h2>
                    <p>Bollywood</p>
                  </div>

                  <div className="rating rating-md mt-2">
                    <input
                      type="radio"
                      name="rating-7"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-7"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-7"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-7"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-7"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* third card */}

            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="avatar">
                  <div className="w-20 rounded-full">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <p>
                  “ Their Service is always perfect, and the staff is very
                  friendly and accommodating. Always looking forward to this
                  place with my friends, the fried vanilla ice cream is
                  exceptionally photographer“
                </p>

                <div className="flex justify-between mt-3">
                  <div>
                    <h2 className="card-title">Angelina Jolie</h2>
                    <p>Hollywood</p>
                  </div>

                  <div className="rating rating-md mt-2">
                    <input
                      type="radio"
                      name="rating-7"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-7"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-7"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-7"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-7"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
