import Swal from "sweetalert2";

const tempPassword = (email, phoneNumber=1234) => {
    // Extract the email name (everything before the @)
    const emailName = email.split('@')[0];

    // Convert the phone number to a string and get the last 4 digits
    const phoneLastFour = phoneNumber.toString().slice(-4);

    // Combine the email name and the last 4 digits of the phone number
    return `${emailName}${phoneLastFour}`;
};

function isPDF(filename) {
    // Use a regular expression to check if the filename ends with ".pdf" (case-insensitive)
    return /\.pdf$/i.test(filename);
}
const onPreview  = (name)=>{
    const fileUrl = `${import.meta.env.VITE_APP_IMG_URL}${name}`
    console.log(fileUrl)
    if (!isPDF(name)){
        Swal.fire({
            imageUrl:fileUrl,
        })
    }else {
        console.log("ITS A PDF")
        //TODO pdf view
        Swal.fire({
            title: "Download File",
            icon: "info",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Download"
        }).then((result) => {
            if (result.isConfirmed) {
                //Open fileUrl on the new tab
                window.open(fileUrl, "_blank");
            }
        })
    }
}

export {tempPassword, isPDF, onPreview}