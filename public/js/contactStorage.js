function SaveContactData() {

    var key = document.getElementById("NewContact").value;
    var value = document.getElementById("NewContactNumber").value;

    Contact = {
        Contact: key,
        PhoneNumber: value
    }

    if (localStorage.getItem('Contacts') === null) {
        // Init array
        var Contacts = [];
        // Add to array
        Contacts.push(Contact);
        // Set to localStorage
        localStorage.setItem('Contacts', JSON.stringify(Contacts));
    } else {
        // Get Contacts from localStorage
        var Contacts = JSON.parse(localStorage.getItem('Contacts'));
        // Add Contacts to array
        Contacts.push(Contact);
        // Re-set back to localStorage
        localStorage.setItem('Contacts', JSON.stringify(Contacts));
    }
    fetchContacts();
}

function fetchContacts() {
    var Contacts = JSON.parse(localStorage.getItem('Contacts'));
    // Get output id
    var ContactsResults = document.getElementById('contactResults');

    // Build output
    ContactsResults.innerHTML = '';
    for (var i = 0; i < Contacts.length; i++) {
        var Contact = Contacts[i].Contact;
        var PhoneNumber = Contacts[i].PhoneNumber;

        ContactsResults.innerHTML += `<div class="btn btn-light"><h3 onclick="inputcontactphone('${PhoneNumber}')" class="" value="${PhoneNumber}">${Contact}<span class="xbutton" onclick="deleteContact('${PhoneNumber}')">X</span></h3></div>`;
    }
}

function deleteContact(PhoneNumber) {
    console.log('delete contact')
        // Get Contacts from localStorage
    var Contacts = JSON.parse(localStorage.getItem('Contacts'));
    // Loop through the Contacts
    for (var i = 0; i < Contacts.length; i++) {
        if (Contacts[i].PhoneNumber == PhoneNumber) {
            // Remove from array
            Contacts.splice(i, 1);
        }
    }
    // Re-set back to localStorage
    localStorage.setItem('Contacts', JSON.stringify(Contacts));

    // Re-fetch Contacts
    fetchContacts();
}

function inputcontactphone(PhoneNumber) {
    var Contacts = JSON.parse(localStorage.getItem('Contacts'));

    let index = Contacts.findIndex(x => x.PhoneNumber === PhoneNumber)
    console.log(Contacts[index].PhoneNumber);
    document.getElementById("ToPhoneNumber").value = Contacts[index].PhoneNumber;
}