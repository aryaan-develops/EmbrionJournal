import mongoose, { Schema, model, models } from 'mongoose';

const JournalSchema = new Schema({
    title: { type: String, required: true },
    abstract: { type: String, required: true },
    keywords: [String],
    authors: [String],
    fileUrl: { type: String, required: true },
    fileId: { type: String, required: true },
    status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' },
    submittedBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

const Journal = models.Journal || model('Journal', JournalSchema);

export default Journal;
