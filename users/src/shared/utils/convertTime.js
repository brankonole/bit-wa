const convertTime = (countTime) => {
    let minute = parseFloat(countTime/1000/60).toFixed(0);
    let hours = countTime/1000/60/60;
    let days = countTime/1000/60/60/24;
    
    if (countTime <= 3600000) {
        if (countTime < 60000) {
            return `${minute} minute ago`
        } else {
            return `${minute} minutes ago`
        }
    }
    if (countTime > 3600000 && countTime <= 86400000) {
        return `Over an hour ago`;
    }
    if (countTime > 86400000 && countTime <= 172800000) {
        return `Two days ago`;
    }
    if (countTime > 172800000 && countTime < 2592000000) {
        return `Over a week ago`;
    }
    if (countTime == 2592000000) {
        return `One month ago`;
    } else {
        return `Over a month ago`;
    }
}

export default convertTime;
