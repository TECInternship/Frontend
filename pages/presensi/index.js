import Navbar from "../../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home({ token }) {
  const router = useRouter();

  return (
    <div className="">
      {/* help tambahin navbar donk cep, gw gangerti napa kaga bisa */}

      <main className="flex  h-screen w-screen justify-center max-h-screen relative md:bg-[url('../public/assets_intern/bg-presensi.png')] bg-no-repeat bg-cover bg-center bg-fixed">
        {/* <div className="absolute left-2 top-2 px-16 py-10 z-10">
                <div className="flex gap-2 cursor-pointer">
                    <Link href={"/"}>
                        <Image
                        className=""
                        src="/assets_intern/logo.png"
                        width={65}
                        height={65}
                        alt="logo"
                        />
                    </Link>
                </div>
            </div> */}
        <div className="flex justify-between absolute w-full p-8 md:px-16 md:py-10">
          <div className="flex md:gap-2 cursor-pointer">
            <Link href={"/"}>
              <Image
                className=""
                src="/assets_intern/logo.png"
                width={65}
                height={65}
                alt="logo"
              />
            </Link>
          </div>
          <div className="invisible md:visible absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] xl:w-[550px] xl:h-[550px] 2xl:w-[700px] 2xl:h-[700px] top-0 left-1 opacity-50 flex">
          <Link href={"/"}>
            <Image
            className=""
            src="/assets_intern/spiderweb.png"
            alt="logo1"
            width={700}
            height={600}
              />
              </Link>
        </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-[100px] 2xl:gap-x-[150px] gap-y-[50px] items-center mb-20 mt-20 mx-10">
          <div>
            <div className="w-5/6 h-5/6 xl:w-full xl:h-full flex mx-auto pb-12 relative">
              <img src="/assets/portal-presensi.png" alt="" />
              <div className="text-center absolute bottom-0 left-0 right-0 content-center text-3xl xl:text-4xl">
                <button
                  className="py-2 px-6 bg-[#504A4A] rounded-xl hover:bg-[#383434] disabled:hover:bg-[#504A4A] cursor-not-allowed"
                  disabled
                >
                  Day 1
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="w-5/6 h-5/6 xl:w-full xl:h-full flex mx-auto pb-12 relative">
              <img src="/assets/portal-presensi-aktif.png" alt="" />
              <div className="text-center absolute bottom-0 left-0 right-0 content-center text-3xl xl:text-4xl">
                <button className="py-2 px-6 bg-[#F57614] rounded-xl transition ease-in-out hover:bg-[#F78F3F]">
                  <Link
                    href="https://bit.ly/PresensiAwalTECademyDay2"
                    target="_blank"
                  >
                    Day 2
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="w-5/6 h-5/6 xl:w-full xl:h-full flex mx-auto pb-12 relative mb-10 md:mb-0">
              <img src="/assets/portal-presensi.png" alt="" />
              <div className="text-center absolute bottom-0 left-0 right-0 content-center text-3xl xl:text-4xl">
                <button
                  className="py-2 px-6 bg-[#504A4A] rounded-xl hover:bg-[#383434] disabled:hover:bg-[#504A4A] cursor-not-allowed"
                  disabled
                >
                  Day 3
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
