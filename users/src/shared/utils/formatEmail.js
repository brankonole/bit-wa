const formatEmail = (emailData) => {
    const email = emailData;   
    const hiddenChar = email.slice(3, 6);

    return email.replace(hiddenChar, '...');
}

export default formatEmail;