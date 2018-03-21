class User {
    constructor(user) {
        this.photo = user.picture.medium;
        this.largePhoto = user.picture.large;
        this.firstName = user.name.first;
        this.email = user.email;
        this.dateOfBirth = user.dob;
        this.gender = user.gender;
    }
}

export default User;