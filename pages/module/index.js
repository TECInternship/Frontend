import Link from "next/link";
import Image from "next/image";

const index = () => {
  return (
    <div className = "">
        <main className="flex h-screen w-screen justify-center max-h-screen relative">
            <div className="flex justify-between absolute w-full p-8 md:px-16 md:py-10">
                <div className="flex absolute w-[230px] h-[230px] md:w-[325px] md:h-[325px] xl:w-[375px] xl:h-[375px] 2xl:w-[445px] 2xl:h-[445px] top-5 left-5 opacity-50">
                    <Image
                    className=""
                    src="/assets_intern/modul_kiri atas.png"
                    alt="frame1"
                    width={445}
                    height={445}
                    />
                </div>
                <div className="flex absolute w-[230px] h-[230px] md:w-[325px] md:h-[325px] xl:w-[375px] xl:h-[375px] 2xl:w-[445px] 2xl:h-[445px] bottom-5 right-5 bg-slate-700 opacity-50">
                    <Image
                    className=""
                    src="/assets_intern/modul_kanan bawah.png"
                    alt="frame2"
                    width={445}
                    height={445}
                    />
                </div>
            </div>
            <div className = "container">
                <div className = "text-5xl mt-20 text-center">MY MODULES</div>
                <form>
                    <div className = "relative">
                        <input type="search" className = "relative mt-5 pl-4 pr-12 text-3xl align-middle mx-auto flex bg-slate-500 w-[750px] h-[60px] opacity-90 rounded-2xl border-none focus:border-slate-300 focus:border" placeholder="Insert Keyword" />
                        <div className = "flex flex-col absolute inset-y-0 pt-5 right-2 items-center pl-3 pointer-events-none opacity-100">
                            <Image
                            className=""
                            src="/assets_intern/search.png"
                            alt="frame2"
                            width={30}
                            height={30}
                            />
                        </div>
                    </div>
                </form>
                <div className = "relative mt-8 pl-6 rounded-2xl h-[150px] bg-slate-500">
                    <h1 className = "text-4xl pt-2">MODULE I</h1>
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