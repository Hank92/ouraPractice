// app/models/ruliWeb.js
var mongoose = require('mongoose');

var issuetodaySchema = mongoose.Schema({
    title: String, 
	url  : String,
	image_url: [String],
	posted: { type: Date, default: Date.now },
	userComments: [{
		userPost: String
	}]

     });

     issuetodaySchema.plugin(mongoosePaginate);
     module.exports = mongoose.model('ruliPost', issuetodaySchema);