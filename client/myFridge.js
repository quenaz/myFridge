import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './myFridge.html';

Products = new Mongo.Collection('products');

Template.fridge.onRendered( function() {
	var templateInstance = this;

	templateInstance.$('#fridge').droppable({
		drop: function( evt, ui ) {
			var query = { _id : ui.draggable.data('id') };
			var changes = { $set : { place: 'fridge' } };

			Products.update( query, changes );
		}
	});
});

Template.productList.onRendered( function() {
	var templateInstance = this;

	templateInstance.$('#supermarket').droppable({
		drop: function( evt, ui ) {
			var query = { _id : ui.draggable.data('id') };
			var changes = { $set : { place: 'supermarket' } };

			Products.update( query, changes );
		}
	});
});

Template.productListItem.onRendered( function() {
	var templateInstance = this;

	templateInstance.$('.draggable').draggable({
		cursor: 'move',
		helper: 'clone'
	});
});

Template.fridge.helpers({
	products: function() {
		return Products.find({ place: 'fridge' });
	}
});

Template.productList.helpers({
	products: function() {
		return Products.find({ place: 'supermarket' });
	}
});