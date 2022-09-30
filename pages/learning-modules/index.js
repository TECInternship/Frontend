import Link from "next/link";
import Image from "next/image";
import ModuleCard from "../../components/ModuleCard";

const index = () => {
  return (
    <div className="">
      <main className="flex h-screen w-screen justify-center max-h-screen relative">
        <div className="absolute left-2 top-2 p-8 md:px-16 md:py-10 z-10">
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
        </div>
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
        <div className="container">
          <div className="text-5xl mt-20 text-center mb-16">
            LEARNING MODULES
          </div>
          {/* <form>
            <div className="relative ">
              <input
                type="search"
                className="static mt-5 pl-4 pr-12 text-2xl md:text-3xl align-middle mx-auto flex bg-slate-500 w-[300px] h-[60px] md:w-[550px] 2xl:w-[750px] opacity-90 rounded-2xl border-none focus:border-slate-300 focus:border bg-opacity-20 bg-white backdrop-blur-xlshadow-2xl"
                placeholder="Insert Keyword"
              />
            </div>
          </form> */}
          <ModuleCard
            title={"Learning Module 1"}
            description={"Simpati, Empati, dan Solusi"}
            link={"https://bit.ly/LearningModuleDay3"}
          />
          {/* <ModuleCard title={"MODULE II"} description={""} />
          <ModuleCard title={"MODULE I"} description={""} /> */}
        </div>
      </main>
    </div>
  );
};

export default index;
