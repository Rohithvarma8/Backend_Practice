import express from 'express';
import * as meetingNotesController from './../controllers/meeting-notes-controllers.js'

const router = express.Router();

router.route('/')
    .get(meetingNotesController.search)
    .post(meetingNotesController.post);

router.route('/:id')
    .get(meetingNotesController.get);

export default router;    
    