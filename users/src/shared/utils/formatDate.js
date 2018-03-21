const formatDate = (dateString) => {    
    const dateOfBirth = dateString.split(' ');
    const date = dateOfBirth[0].split('-');
    const finalDate = `${date[2]}.${date[1]}.${date[0]}`;
    
    return finalDate;
}

export default formatDate;