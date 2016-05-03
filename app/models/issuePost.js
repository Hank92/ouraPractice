// app/models/issuePost.js
var mongoose = require('mongoose');

var issueSchema = mongoose.Schema({
    title: String, 
	url  : String,
	img_url: [String],
	posted: { type: Date, default: Date.now },
	comments: [{
		name: String,
		content: String
	}],
	userComments: [{
		userPost: String
	}]

     });

     issueSchema.plugin(mongoosePaginate);
     module.exports = mongoose.model('issuePost', issueSchema);