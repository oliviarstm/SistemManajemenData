
const DashboardButton = ({ image, title }) => {
  return (
    <button className="bg-white h-60 w-80 rounded-lg flex flex-col items-center justify-end px-10 shadow drop-shadow-xl">
      <div className="h-full w-full flex justify-center items-center">
        <img src={image} alt="" />
      </div>
      <h1 className=" h-1/5 font-bold text-[#235EAC]">{title}</h1>
    </button>
  );
};

export default DashboardButton;
