const countGender = (data) => {
    let maleCounter = 0;
    let femaleCounter = 0;

    data.forEach(function(e) {
        if (e.gender == 'female') {
            femaleCounter++;
        } else {
            maleCounter++;
        }
    });
    
    return [maleCounter, femaleCounter];
}

export default countGender;