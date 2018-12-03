const mongoose = require('mongoose');
const Store = mongoose.model('Store');

exports.homePage = (req, res) => {
    console.log(req.name);
    req.flash('error', 'something happened');
    res.render('index');
}

exports.addStore = (req, res) => {
    res.render('editStore', {
        title: 'Add Store'
    });
}



exports.createStore = async (req, res) => {
    const store = await (new Store(req.body)).save();
    req.flash('success', `Succesfully created ${store.name}. Care to leave a review`);
    res.redirect(`/store/${store.slug}`);
}

exports.getStores = async (req, res) => {
    const stores = await Store.find();
    console.log(stores)
    res.render('stores', { title: "Stores", stores })
}

exports.editStore = async (req, res) => {
    // 1. Find the store given the ID
    const store = await Store.findOne({ _id: req.params.id });

    // 2. confirm they are the owner of the store
    // TODO

    // 3. Render out the edit form so the use can 
    res.render('editStore', { title: `Edit ${store.name}`, store });
}

exports.updateStore = async (req, res) => {
    // find and update the store
    var q = { _id: req.params.id }
    var data = req.body;
    var options = { new: true, runValidators: true } // return new store the updated data
    const store = await Store.findOneAndUpdate(q, data, options).exec();
    // redirect to the new store and tell them it worked. 

    req.flash('success', `Successfully updated <strong>${store.name}</strong>. <a href="/stores/${store.slug}">View Store ></a>`);
    res.redirect(`/stores/${store._id}/edit`);
}