"use strict";

const input = document.getElementById('input');
const submit = document.getElementById('submit');
const label = document.getElementById('label');
const contactcontainer = document.getElementById('contactcontainer');
const contacts = [];
const emailPattern = /^(?=^.{8,}$)[-_A-Za-z0-9]+([_.-][a-zA-Z0-9]+)*@[A-Za-z0-9]+([.-][a-zA-Z0-9]+)*\.[A-Za-z]{2,}$/;

let contactnum = 0;

class Contact {
    constructor(name, city, email) {
        this.name = name;
        this.city = city;
        this.email = email;
    }
}

submit.addEventListener('click', function() {
    if(input.value != '') {
        const fields = input.value.split(', ');
        if(fields.length === 3 && fields[2].match(emailPattern)) {
            contacts[contactnum] = new Contact(fields[0], fields[1], fields[2]);
            contactnum++;
            const div = document.createElement("div");
            div.innerHTML = `<p class="${contactnum}"><b>Name: </b>${fields[0]}</p><p><b>City: </b>${fields[1]}</p><p><b>Email: </b>${fields[2]}</p>`;
            div.addEventListener('click', function() { 
                div.remove();
                contacts.splice((div.innerHTML.substr(9, 1) - 1), 1);
            });
            div.classList.add("contactDiv");
            contactcontainer.prepend(div);
            label.innerHTML = "";
        } else {
            label.innerHTML = "Invalid format";
        }
    } else {
        label.innerHTML = "Input cannot be empty";
    }
    input.value = '';
});