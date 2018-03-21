const formatName = (nameData) => {    
    const firstLetter = (nameData)[0].toUpperCase();
    const otherNameLetter = (nameData).slice(1);
    return firstLetter + otherNameLetter;
}

export default formatName;