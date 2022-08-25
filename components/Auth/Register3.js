import React from "react";
import Register1 from "./Register1";

const Register3 = (props) => {
  return (
    <div className="animate-fade">
    <form className="px-12 py-10" onSubmit={() => props.setActive("3")}>
      <div className="text-2xl font-semibold">Konfirmasi</div>
      <div className="mt-2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi tempore ab, eum dolor quisquam facilis rerum. Architecto ullam quidem, eveniet consectetur magnam nesciunt maxime mollitia nulla
      </div>

      <div className="mt-16 flex flex-row-reverse justify-end gap-2">
        <input
            type={"submit"}
            value="FINISH"
            className="px-8 md:px-12 py-2 rounded-xl text-md font-bold bg-gradient-to-br from-[#9ADFD3] to-[#2F9685] cursor-pointer"
          />
        <button
          className="px-8 md:px-12 py-2 rounded-xl text-md font-bold border"
          onClick={() => {
            if (checked) {
            props.setActive("2")
          } else {
            props.setActive("1")
          }
          }}
        >
          BACK
        </button>
      </div>
      </form>
      </div>
  );
};

export default Register3;
