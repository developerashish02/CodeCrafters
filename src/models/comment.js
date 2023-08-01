
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    blogId: { type: mongoose.Schema.Types.ObjectId, ref: 'Blog', required: true },
    text: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const Comment = mongoose.models.Comment || mongoose.model('Comment', commentSchema);

module.exports = Comment;
