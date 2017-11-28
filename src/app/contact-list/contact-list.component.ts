import { Component, OnInit } from "@angular/core";
import contactList from "../contacts";

@Component({
  selector: "app-contact-list",
  templateUrl: "./contact-list.component.html",
  styleUrls: ["./contact-list.component.css"]
})
export class ContactListComponent implements OnInit {
  contacts: object[];
  newContact = {
    name: "",
    email: "",
    phoneNumber: "",
    image: ""
  };
  constructor() { }

  ngOnInit() {
    this.contacts = contactList;
  }
  addContact(contact) {
    console.log("Add contact has been called");
    this.contacts.push(contact);
    // add contact to contacts list
    // clear inputs
  }
}
