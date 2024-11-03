import Swal from "sweetalert2";

// Membuat password berdasarkan email dan nomor telepon
const tempPassword = (email, phoneNumber=1234) => {
    // Extract the email name (everything before the @)
    const emailName = email.split('@')[0];

    // Convert the phone number to a string and get the last 4 digits
    const phoneLastFour = phoneNumber.toString().slice(-4);

    // Combine the email name and the last 4 digits of the phone number
    return `${emailName}${phoneLastFour}`;
};

// Function untuk mengecek file pdf
function isPDF(filename) {
    return /\.pdf$/i.test(filename);
}

// Membuka pop up menampilkan gambar atau download pdf
const onPreview  = (name)=>{
    const fileUrl = `${import.meta.env.VITE_APP_IMG_URL}${name}`
    console.log(fileUrl)
    if (!isPDF(name)){
        Swal.fire({
            imageUrl:fileUrl,
        })
    }else {
        console.log("ITS A PDF")
        Swal.fire({
            title: "Download File",
            icon: "info",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Download"
        }).then((result) => {
            if (result.isConfirmed) {
                //Buka pdf di tab baru
                window.open(fileUrl, "_blank");
            }
        })
    }
}

export {tempPassword, isPDF, onPreview}