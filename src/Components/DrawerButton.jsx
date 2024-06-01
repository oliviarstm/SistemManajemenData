
const DrawerButton = ({ title }) => {
  return (
    <div>
      <button className="w-full text-lg py-3 font-semibold text-white text-left ps-16 hover:bg-[#FBFBFB] hover:text-[#235EAC]">
        {title}
      </button>
    </div>
  );
};

export default DrawerButton;
