import MeetingNotes  from "./../models/meeting-notes.js";

export const search = async (params = {}) => {
     const notes = await MeetingNotes.find(params).exec();
     return notes;
}

export const save = async (note) => {
    const meetingNotes = new MeetingNotes(note);
    const savedMeetingNote = await meetingNotes.save();
    return savedMeetingNote;

}

export const get = async (id) => {
    const note = await MeetingNotes.findById(id).exec();
    return note;

}