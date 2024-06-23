const tempPassword = (email, phoneNumber) => {
    // Extract the email name (everything before the @)
    const emailName = email.split('@')[0];

    // Convert the phone number to a string and get the last 4 digits
    const phoneLastFour = phoneNumber.toString().slice(-4);

    // Combine the email name and the last 4 digits of the phone number
    return `${emailName}${phoneLastFour}`;
};

export {tempPassword}