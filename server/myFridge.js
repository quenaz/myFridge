import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  Products = new Mongo.Collection('products');

  Products.remove({});

  // fill the database with some products
  Products.insert({
  	name: 'Milk',
  	img: '/milk.png',
  	place: 'fridge'
  });

  Products.insert({
  	name: 'Bread',
  	img: '/bread.png',
  	place: 'supermarket'
  });


}); // Meteor.startup()
