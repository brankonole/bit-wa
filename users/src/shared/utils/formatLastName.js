const formatLastName = (lastNameData) => {    
    const firstLetter = (lastNameData)[0].toUpperCase();
    const otherNameLetter = (lastNameData).slice(1);
    return firstLetter + otherNameLetter;
}

export default formatLastName;