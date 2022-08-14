import React from 'react'

export default function register_2() {
  return (
    <div className='flex'>
        <div className='bg-white/10 backdrop-blur-lg h-[707px] w-[325px] rounded-xl mt-[105px] ml-[56px] shadow-xl'>
            <div className='pt-10'>
                <div className='ml-12 text-2xl font-semibold'>Registration</div>
            
                <div className='flex flex-row mt-16'>
                    <div className='flex flex-col relative'>
                        <div className='w-6 h-6 rounded-full bg-[#C1D75C] ml-12'></div>
                        <div className='ml-[60px] w-0.5 h-32 bg-[#525926]'></div>

                        <div className='absolute mt-[154px] w-8 h-8 -inset-0.5 blur opacity-75 rounded-full bg-[#C1D75C] text-center ml-[44px]'></div>
                        <div className='w-8 h-8 rounded-full bg-[#C1D75C] ml-[44px]'></div>
                    </div>
                <div>
                
                <div className='ml-12'>Data Diri</div>
                <div className='mt-32 ml-12'>Pembayaran</div>
            </div>
        </div>  
    </div>


    </div>
        <div className='bg-white/10 backdrop-blur-lg  h-[707px] w-[897px] rounded-xl mt-[105px] ml-[56px] shadow-xl'>
            <div className='pt-10 ml-12'>
                <div className='text-2xl font-semibold'>Lakukan Pembayaran</div>
                <div className='mt-2'>Untuk menjadi intern resmi, kamu diharuskan membayar biaya registrasi.</div>
          
                <div className='mt-10'>Tipe Pembayaran</div>
                <div class="mb-3 xl:w-96">
                    <select class="form-select appearance-none
                    block
                    mt-2
                    w-[535px]
                    h-[52px]
                    px-3
                    py-1.5

                    text-white
                    bg-white/20 backdrop-blur-none
                    rounded-2xl
                    transition
                    ease-in-out
                    m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                        <option selected value="1">Single  Rp50.000/orang</option>
                        <option value="2">Double  Rp40.000/orang </option>
                        <option value="3">Triple  Rp35.000/orang</option>
             
                    </select>
                </div>

                <div className='mt-10'>Nama Teman 1</div>
                <input type="text" className='mt-2 w-[535px] h-[52px] rounded-2xl bg-white/20 backdrop-blur-none px-3'/>

                <div className='mt-10'>Nama Teman 2</div>
                <input type="text" className='mt-2 w-[535px] h-[52px] px-3 rounded-2xl bg-white/20 backdrop-blur-none'/>
            
                <div className='mt-10'>Bukti Pembayaran</div>
                <div className='text-xs font-extralight'>kirim ke XXXXXXXX a.n. Willy Wonka</div>
                <input class="mt-2 block w-64 text-base text-white bg-white/20 backdrop-blur-none rounded-lg border border-gray-300 cursor-pointer focus:outline-none" id="file_input" type="file"/>


                <div className='container px-16 mt-8 flex justify-end'>
                    <a href="#_" class="px-16 py-4 text-xl font-semibold text-center text-red-900 rounded-lg hover:bg-gradient-to-bl focus:ring-2 focus:outline-none bg-gradient-to-b from-slate-50 to-red md:w-auto">
                    LANJUT
                    </a>
                </div>
            </div> 


        </div>




    </div>
  )
}
