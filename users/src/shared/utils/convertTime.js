const convertTime = (countTime) => {
    let minute = parseFloat(countTime/1000/60).toFixed(0);
    let hours = countTime/1000/60/60;
    let days = countTime/1000/60/60/24;
    
    if (countTime < (3600000)) {
        if (countTime < 60000) {
            return `${minute} minute ago`
        } else {
            return `${minute} minutes ago`
        }
    }

}

export default convertTime;
