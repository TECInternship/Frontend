import Navbar from "../../components/Navbar";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Home({ token }) {
    const router = useRouter();
    
    return (
    <div className="">
        <main className="flex h-screen w-screen justify-center max-h-screen relative md:bg-[url('../public/assets_intern/bg-presensi.png')] bg-no-repeat bg-cover bg-center bg-fixed">
            {/* <div className=" absolute w-[600px] h-[600px] md:w-[1000px] md:h-[800px] xl:w-[1920px] xl:h-[1200px] bottom-0 opacity-50 flex">
                <Image
                    className=""
                    src="/assets_intern/city.png"
                    alt="logo"
                    width={2500}
                    height={1200}
                />
            </div> */}
            <div className=" absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] xl:w-[550px] xl:h-[550px] 2xl:w-[700px] 2xl:h-[700px] top-0 left-1 opacity-50 flex">
                <Image
                    className=""
                    src="/assets_intern/spiderweb.png"
                    alt="logo"
                    width={700}
                    height={700}
                />
            </div>
            <div className = "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-[100px] 2xl:gap-x-[150px] gap-y-[50px] items-center mb-20 mt-20 mx-10">
                <div>
                    <div className="w-5/6 h-5/6 xl:w-full xl:h-full flex mx-auto pb-12 relative">
                        <img src="/assets/portal-presensi-aktif.png" alt="" />
                        <div className="text-center absolute bottom-0 left-0 right-0 content-center text-3xl xl:text-4xl">
                            <button className="py-2 px-6 bg-red-800 rounded-xl hover:bg-red-900">
                                Day 1
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="w-5/6 h-5/6 xl:w-full xl:h-full flex mx-auto pb-12 relative">
                        <img src="/assets/portal-presensi.png" alt="" />
                        <div className="text-center absolute bottom-0 left-0 right-0 content-center text-3xl xl:text-4xl">
                            <button className="py-2 px-6 bg-[#504A4A] rounded-xl hover:bg-[#383434]">
                                Day 2
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="w-5/6 h-5/6 xl:w-full xl:h-full flex mx-auto pb-12 relative mb-10 md:mb-0">
                        <img src="/assets/portal-presensi.png" alt="" />
                        <div className="text-center absolute bottom-0 left-0 right-0 content-center text-3xl xl:text-4xl">
                            <button className="py-2 px-6 bg-[#504A4A] rounded-xl hover:bg-[#383434]">
                                Day 3
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
    );
};
