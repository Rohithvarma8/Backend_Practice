import { request, response } from "express";
import * as meetingNotesService from "./../services/meeting-notes-services.js";
import { setError, setResponse } from "./response-handlers.js";

export const search = async (request, response) => {
    try{
        const params = {...request.query};
        const notes = await meetingNotesService.search(params);
        setResponse(notes, response);

    } catch(error){
        setError(error,response);
    }
}

export const get = async (request, response) => {
    try{
        
        const note = await meetingNotesService.get(request.params.id);
        setResponse(note, response);

    } catch(error){
        setError(error,response);
    }
}

export const post = async (request, response) => {
    try{
        const note = {...request.body};
        const meetingNote = await meetingNotesService.save(note);
        setResponse(meetingNote, response);

    } catch(error){
        setError(error,response);
    }
}