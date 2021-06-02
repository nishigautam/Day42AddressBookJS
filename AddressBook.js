class Contact {

    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }

    get firstName() {
        return this._firstName;
    }
    set firstName(firstName) {
        const firstNamePattern = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if (firstNamePattern.test(firstName)) 
            this._firstName = firstName;
        else throw "Invalid First Name";
    }

    get lastName() {
        return this._lastName;
    }
    set lastName(lastName) {
        const lastNamePattern = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if (lastNamePattern.test(lastName)) 
            this._lastName = lastName;
        else throw "Invalid Last Name";
    }

    get address() {
        return this._address;
    }
    set address(address) {
        const addressPattern = RegExp("^[A-Z]{1}[a-z]{3,}$");
        if (addressPattern.test(address))
            this._address = address;
        else throw "Invalid Address";
    }

    get city() {
        return this._city;
    }
    set city(city) {
        const cityPattern = RegExp('^[A-Za-z ]{3,}$');
        if (cityPattern.test(city))
            this._city = city;
        else throw "Invalid City";
    }

    get state() {
        return this._state;
    }
    set state(state) {
        const statePattern = RegExp("^[a-zA-Z0-9_]+( [a-zA-Z0-9_]+)*$");
        if( statePattern.test(state))
            this._state = state;
        else throw "Invalid State";
    }

    get zip() {
        return this._zip;
    }
    set zip(zip) {
        const pinPattern = RegExp("^[0-9]{6}$");
        if(pinPattern.test(zip))
            this._zip = zip;
        else throw "Invalid Zip: " + zip;
    }

    get phoneNumber() {
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber) {
        const phonePattern = RegExp("^[0-9]{2}[ ]*[0-9]{10}$");
        if(phonePattern.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else throw "Invalid Phone Number";
    }

    get email() {
        return this._email;
    }
    set email(email) {
        const emailPattern = RegExp("^[a-zA-Z0-9+_-]+([.][a-zA-Z0-9]+)*@([a-zA-Z0-9]+)([.][a-z]+)?[.][a-z]{2,}$");
        if(emailPattern.test(email))
            this._email = email;
        else throw "Invalid EmailID";
    }

    toString(){
        return "First Name : "+ this.firstName + "\n Last Name : "+ this.lastName + "\n Address : "+ this.address + 
        "\n city : "+ this.city + "\n State : "+ this.state +"\n Zip : "+ this.zip+ "\n Phone No : "+ this.phoneNumber + "\n Email : "+ this.email;
    }
}

let conatctBookArray = new Array();

try {
    contact = new Contact("Nishi", "Gautam", "Mayur", "Lucknow", "UP", 627361, "91 8732671298", "nishigautam@gmail.com");
    conatctBookArray.push(contact);
    conatctBookArray.push(new Contact("Joe", "Adam", "Vistar", "Delhi", "NCR", 602821, "91 9832178328", "Joe123@gmail.com"));
    conatctBookArray.push(new Contact("Aman", "Asthana", "Banglore", "Karnatka", 226016, "91 8992174839", "Alex1290Gorden@gmail.com"));
    conatctBookArray.forEach(contact => console.log(contact.toString()));
} catch (e) {
    console.error(e);
}
        
//console.log(conatctBookArray.toString());