import Navbar from "../components/Navbar";
import { useRouter } from "next/router";

export default function Home({ token }) {
    const router = useRouter();
    
    return (
    <div className="">
        <main className="flex h-screen w-screen justify-center max-h-screen relative bg-[url('../public/assets/bg-presensi.png')] bg-no-repeat bg-cover bg-center bg-fixed">
            <Navbar token={token}/>
            <div className = "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-[100px] 2xl:gap-x-[150px] gap-y-[50px] items-center mb-20 mt-20 mx-10">
                <div>
                    <div className="w-full h-full flex mx-auto pb-12 relative">
                        <img src="/assets/portal-presensi-aktif.png" alt="" />
                        <div className="text-center absolute bottom-0 left-0 right-0 content-center text-3xl xl:text-4xl">
                            <button className="py-2 px-6 bg-red-800 rounded-xl hover:bg-red-900">
                                Day 1
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="w-full h-full flex mx-auto pb-12 relative">
                        <img src="/assets/portal-presensi.png" alt="" />
                        <div className="text-center absolute bottom-0 left-0 right-0 content-center text-3xl xl:text-4xl">
                            <button className="py-2 px-6 bg-[#504A4A] rounded-xl hover:bg-[#383434]">
                                Day 2
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="w-full h-full flex mx-auto pb-12 relative">
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
