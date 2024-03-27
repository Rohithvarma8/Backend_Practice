import meetingNotesRouter from "./meeting-notes-route.js";

const initializeRoutes = (app) => {
    app.use('/meetingNotes',meetingNotesRouter);
}

export default initializeRoutes;