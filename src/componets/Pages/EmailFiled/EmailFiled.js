import React from "react";
import img from "../../../image/appointment.png";
import PrimaryButton from "../../Buttons/PrimaryButton";

const EmailFiled = () => {
  const handleFrom = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const feedback = form.bio.value;

    console.log();

    fetch("https://mobile-server-site.vercel.app/feedBack", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ name, email, feedback }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

      });
  };

  return (
    <section
      data-aos="zoom-in-down"
      className="mt-20 py-12 font-serif"
      style={{
        background: `url(${img})`,
      }}
    >
      <div className="text-center mb-10 ">
        <h2 className="text-info font-bold  mb-2 text-xl">Contact Us</h2>
        <h2 className="text-2xl text-white uppercase">Add Feedback</h2>
      </div>
      <form onSubmit={handleFrom}>
        <div className=" flex  items-center justify-center mb-2">
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="input input-bordered w-full max-w-xs  "
          />
        </div>
        <div className="flex  items-center justify-center mb-2">
          <input
            name="email"
            type="text"
            placeholder="Email"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <div className="flex  items-center justify-center">
          <textarea
            name="bio"
            className="textarea textarea-bordered w-80 "
            placeholder="Bio"
          ></textarea>
        </div>
        <div className="flex  items-center justify-center mt-4">
          <PrimaryButton classes="border-solid border-2 border-hidden border-double px-6 py-1">
            button
          </PrimaryButton>
        </div>
      </form>
    </section>
  );
};

export default EmailFiled;
