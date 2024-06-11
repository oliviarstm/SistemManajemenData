import Table from "../../../Components/table/PengumpulanMentor/Index.jsx";

const exTitle = "Crazy 8";
const exField = ["Nama", "Kelas", "Sesi", "File", "Nilai"];
const exData = [{
    id:1,
    Name:"Olivia",
    Class:"A",
    Session:"Pagi"
}, {
    id:2,
    Name:"Kelvin",
    Class:"B",
    Session:"Siang"
}]
const TempPengumpulanTugasMentor = ()=>{
    const propsData={
        title:exTitle,
        field:exField,
        data:exData,
        isEnable:false,
        desc:"Kelas A",
    }

    return (
        <>
            <Table props={propsData}/>
        </>
    )
}

export default TempPengumpulanTugasMentor