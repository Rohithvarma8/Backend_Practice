import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    updated: {
        type: String,
        required: true
    }

});

const model = mongoose.model('meetingNotes',Schema);

export default model;
