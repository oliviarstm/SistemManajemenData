import Table from "../../Components/tempTabelRekap/Index.jsx";

const exTitle = "Rekap Absen Mentee";
const exField = ["Waktu", "Status"];
const exData = [{
    id: 1,
    waktu: "2024-10-1",
    status:"On Cam"
},{
    id: 6,
    waktu: "2024-10-2",
    status:"Off Cam"
}]

const TempRekapAbsen = () => {
    const propsData={
        title:exTitle,
        field:exField,
        data:exData,
        isEnable:false,
    }

    return (
        <>
            <Table props={propsData}/>

        </>
    );
};

export default TempRekapAbsen;
