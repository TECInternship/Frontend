import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

const Profile = () => {
  return (
    <main className="h-screen w-screen bg-scroll bg-no-repeat bg-cover max-h-screen flex">
      <Image
        className="object-center object-cover pointer-events-none"
        src="/info1.png"
        alt="bg"
        layout="fill"
        // objectFit='cover'
        // objectPosition="center"
      />

      <div className="flex justify-between absolute w-full px-8 py-10">
        <div className="flex gap-2 cursor-pointer">
          <Link href={"/"}>
            <Image
              className=""
              src="/tecputih.png"
              width={50}
              height={50}
              alt="logo"
            />
          </Link>
          <Link href={"/"}>
            <Image
              className=""
              src="/text-logo.png"
              width={140}
              height={50}
              alt="logo"
            />
          </Link>
        </div>
      </div>
      <div className="w-full justify-center flex items-center px-2">
        <div className="m-0">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-4 lg:p-6 2xl:p-10 flex flex-row">
            <div className="flex flex-col gap-2 font-thin text-[#F8F4EE] font-WorkSans text-xl lg:text-2xl p-2">
              Nama
              <div className="font-semibold mb-3">Alexander Jason</div>
              Fakultas
              <div className="font-semibold mb-3">STEI</div>
              Nomor TEC
              <div className="font-semibold mb-3">TEC010</div>
              Tahun Masuk ITB
              <div className="font-semibold mb-3">2022</div>
            </div>
            <div className=" flex flex-col object-right pl-10 space-y-60 py-0">
              <Image
                className=""
                src="/icon_profile.png"
                width={75}
                height={75}
                alt="logo"
              />
              <div className="flex justify-between">
                <Image
                  className=""
                  src="/logo-glasses.png"
                  width={75}
                  height={40}
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </main>
  );
};

export default Profile;
