//Ravneet Singh
//College ID - 301175326

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the model
let Contact = require('../models/contact');

module.exports.displayContactList = (req, res, next) => {
    Contact.find((err, contactList) => {
        if (err) {
            return console.error(err);
        }
        else {
            //console.log(ContactList);
            res.render('contact/list',
                {
                    title: 'Contacts',
                    ContactList: contactList,
                    displayName: req.user ? req.user.displayName : ''
                });
        }
    });
}
// try
module.exports.displaySortedList = (req, res, next) => {
    Contact.find({}).sort({ Name: 1 }).then(result => {
        //console.log(ContactList);

        res.render('contact/sort', {
            title: 'Sorted Contacts',
            SortedList: result,
            displayName: req.user ? req.user.displayName : ''
        });
    })
}
// try
module.exports.displayAddPage = (req, res, next) => {
    res.render('contact/add', {
        title: 'Add Contact',
        displayName: req.user ? req.user.displayName : ''
    })
}

module.exports.processAddPage = (req, res, next) => {
    let newContact = Contact({
        "Name": req.body.Name,
        "Address.City": req.body.City,
        "Address.Country": req.body.Country,
        "Phone": req.body.Phone,
        "Email": req.body.Email
    });

    Contact.create(newContact, (err, Contact) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            // refresh the Contact list
            res.redirect('/contact-list');
        }
    });

}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Contact.findById(id, (err, contactToEdit) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            //show the edit view
            res.render('contact/edit', {
                title: 'Edit Contact', contact: contactToEdit,
                displayName: req.user ? req.user.displayName : ''
            })
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedContact = Contact({
        "_id": id,
        "Name": req.body.Name,
        "Address.City": req.body.City,
        "Address.Country": req.body.Country,
        "Phone": req.body.Phone,
        "Email": req.body.Email
    });

    Contact.updateOne({ _id: id }, updatedContact, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            // refresh the book list
            res.redirect('/contact-list');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Contact.remove({ _id: id }, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            // refresh the book list
            res.redirect('/contact-list');
        }
    });
}