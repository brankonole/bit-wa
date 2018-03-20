class User {
    constructor(user) {
        this.photo = user.picture.medium;
        this.firstName = user.name.first;
        this.email = user.email;
        this.dateOfBirth = user.dob;
    }
}

export default User;