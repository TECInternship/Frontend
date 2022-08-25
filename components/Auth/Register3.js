import React, { useState, useEffect } from "react";

const Register3 = (props) => {
  const [Link, setLink] = useState("");
  return (
    <div className="animate-fade">
      <form className="px-12 py-10" onSubmit={() => props.setActive("3")}>
        <div className="text-2xl font-semibold">Konfirmasi</div>
        <div className="mt-2">
          Sebagai bukti kelengkapan persyaratan, kamu diharuskan menyertakan
          bukti yang dikumpulkan dalam folder Google Drive.
        </div>

        {/* Nama */}
        <h1 className="mt-10">Link Google Drive</h1>
        <input
          type="text"
          className="mt-2 w-full md:w-4/5 p-3 rounded-2xl bg-white/20 backdrop-blur-none outline-none"
          value={Link}
          onChange={(e) => setLink(e.target.value)}
          // required
        />
        <div className="mt-16 flex flex-row-reverse justify-end gap-2">
          <input
            type={"submit"}
            value="FINISH"
            className="px-8 md:px-12 py-2 rounded-xl text-md font-bold bg-gradient-to-br from-[#9ADFD3] to-[#2F9685] cursor-pointer"
          />
          <button
            className="px-8 md:px-12 py-2 rounded-xl text-md font-bold border"
            onClick={() => {
              if (props.checked) {
                props.setActive("2");
              } else {
                props.setActive("1");
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
