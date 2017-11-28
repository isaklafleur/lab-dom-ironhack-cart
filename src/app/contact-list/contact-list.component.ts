import { Component, OnInit } from "@angular/core";
import contactList from "../contacts";

@Component({
  selector: "app-contact-list",
  templateUrl: "./contact-list.component.html",
  styleUrls: ["./contact-list.component.css"]
})
export class ContactListComponent implements OnInit {
  contacts: object[];
  newContact: {
    name: string,
    email: string,
    phoneNumber: string,
    image: string
  };
  constructor() { }

  ngOnInit() {
    this.contacts = contactList;
  }
  addContact(contact) {
    console.log("Add contact has been called");
    this.contacts.push(contact);
    this.newContact = {
      name: "",
      email: "",
      phoneNumber: "",
      image: ""
    };
  }
}
