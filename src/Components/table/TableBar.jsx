const TableBar=({title, desc, isButton, handleAdd})=>{
    return <div className="bg-white mx-10 my-5 p-5 flex flex-row justify-between items-center">
        <div className="flex flex-col">
            <h1 className="text-black font-medium text-2xl">{title}</h1>
            <h1 className="text-gray-700 font-normal">{desc}</h1>
        </div>
        <div>
            {isButton?<button className="bg-[#0070FF] hover:bg-[#4593f7] text-white font-bold py-2 px-4 rounded inline-flex items-center" onClick={()=>handleAdd}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 me-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                <p>Tambahkan</p>
            </button>:null}
        </div>
    </div>
}

export default TableBar