import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Register3 = ({ email, setActive, checked }) => {
  const [link, setLink] = useState("");
  const router = useRouter();
  const [userId, setUserId] = useState("");

  useEffect(() => {
    setUserId(localStorage.getItem("user"));
  }, []);

  useEffect(() => {
    axios
      .get(
        `http://localhost:4000/api/get-user/?_id=${localStorage.getItem(
          "user"
        )}`
      )
      .then((res) => {
        setLink(res.data.buktiPersyaratan);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/api/edit-user", {
        _id: userId,
        buktiPersyaratan: link,
      })
      .then(() => {
        router.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="animate-fade">
      <form className="px-12 py-10" onSubmit={handleSubmit}>
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
          value={link}
          placeholder="https://drive.google.com/drive/folder/..."
          onChange={(e) => setLink(e.target.value)}
          required
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
              if (checked) {
                setActive("2");
              } else {
                setActive("1");
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
