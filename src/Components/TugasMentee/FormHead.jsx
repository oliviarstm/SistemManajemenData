const FormHead=({title})=>{
    return <div className="bg-white mx-10 my-5 p-5 flex flex-row justify-between items-center">
        <div className="flex flex-col">
            <h1 className="text-black font-medium text-2xl">{title}</h1>
        </div>
    </div>
}

export default FormHead