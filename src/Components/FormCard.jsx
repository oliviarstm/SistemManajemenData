const FormCard = ({
                      title,
                      fields,
                      onSubmit,
                      onChange,
                      editable = true,
                      formData,
                      onView
                  }) => {
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body ">
                <h2 className="card-title justify-center">{title}</h2>
                <hr />
                <form onSubmit={onSubmit} className="flex flex-col gap-1 px-32">
                    {fields.map((field, index) => (
                        <div key={index} className="grid grid-cols-3 items-center">
                            <div className="col-span-1 flex items-center">
                                <label className="text-gray-600 mr-2">{field}</label>
                            </div>
                            <div className="col-span-1 flex items-center justify-center">
                                <span>:</span>
                            </div>
                            <div className="col-span-1 ">
                                {field ==="File"?
                                    <button className="text-[#858585] py-0 px-5 rounded border border-[#858585] hover:bg-[#c2c2c2] hover:text-white hover:border-white" type={"button"} onClick={()=>onView(formData[field])}>Lihat File</button>
                                    :
                                    editable ? (
                                        <input
                                            type="text"
                                            placeholder={`Masukkan ${field.toLowerCase()}`}
                                            name={field.toLowerCase()}
                                            className="input input-bordered h-8"
                                            value={formData[field] || ""}
                                            onChange={(e) => onChange(e, field.toLowerCase())}
                                        />
                                    ) : (
                                        <span>{formData[field]}</span>
                                    )}
                            </div>
                        </div>
                    ))}
                </form>
            </div>
        </div>
    );
};

export default FormCard;
