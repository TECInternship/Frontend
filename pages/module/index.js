import Link from "next/link";
import Image from "next/image";

const index = () => {
  return (
    <div className = "">
        <main className="flex h-screen w-screen justify-center max-h-screen relative">
            <div className="flex absolute w-[230px] h-[230px] md:w-[325px] md:h-[325px] xl:w-[375px] xl:h-[375px] 2xl:w-[445px] 2xl:h-[445px] top-5 left-5 opacity-50">
                <Image
                className=""
                src="/assets_intern/modul_kiri atas.png"
                alt="frame1"
                width={445}
                height={445}
                />
            </div>
            <div className="flex absolute w-[230px] h-[230px] md:w-[325px] md:h-[325px] xl:w-[375px] xl:h-[375px] 2xl:w-[445px] 2xl:h-[445px] bottom-5 right-5 opacity-50">
                <Image
                className=""
                src="/assets_intern/modul_kanan bawah.png"
                alt="frame2"
                width={445}
                height={445}
                />
            </div>
            <div className = "container">
                <div className = "text-5xl mt-20 text-center">MY MODULES</div>
                <form>
                    <div className = "relative">
                        <input type="search" className = "static mt-5 pl-4 pr-12 text-2xl md:text-3xl align-middle mx-auto flex bg-slate-500 w-[300px] h-[60px] md:w-[550px] 2xl:w-[750px] opacity-90 rounded-2xl border-none focus:border-slate-300 focus:border" placeholder="Insert Keyword" />
                            {/* <div className = "static inset-y-4 right-0">
                                <Image
                                className=""
                                src="/assets_intern/search.png"
                                alt="frame2"
                                width={30}
                                height={30}
                                />
                            </div> */}
                    </div>
                </form>
                <div className = "relative mt-8 pl-6 rounded-2xl mx-10 h-[150px] bg-slate-500">
                    <h1 className = "text-4xl pt-2">MODULE I</h1>
                    <p className = "text-md mt-2">Description</p>
                    <button className = "bg-[#58BF75] hover:bg-[#2F8647] rounded-xl py-1 px-6 text-xl absolute bottom-3 right-5">
                        Open
                    </button>
                </div>
                <div className = "relative mt-8 pl-6 rounded-2xl mx-10 h-[150px] bg-slate-500">
                    <h1 className = "text-4xl pt-2">MODULE II</h1>
                    <p className = "text-md mt-2">Description</p>
                    <button className = "bg-[#58BF75] hover:bg-[#2F8647] rounded-xl py-1 px-6 text-xl absolute bottom-3 right-5">
                        Open
                    </button>
                </div>
                <div className = "relative mt-8 pl-6 rounded-2xl mx-10 mb-5 h-[150px] bg-slate-500">
                    <h1 className = "text-4xl pt-2">MODULE II</h1>
                    <p className = "text-md mt-2">Description</p>
                    <button className = "bg-[#58BF75] hover:bg-[#2F8647] rounded-xl py-1 px-6 text-xl absolute bottom-3 right-5">
                        Open
                    </button>
                </div>
            </div>
        </main>
    </div>
  )
}

export default index