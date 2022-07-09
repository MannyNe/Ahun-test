import {Express, Request, Response} from "express";
import {createUserHandler} from "./controller/user.controller"
import { createUserSessionHandler, getUserSessionsHandler } from "./controller/session.controller";
import validateRes from "./middleware/validateRes"
import { createUserSchema } from "./schema/user.schema";
import { createSessionSchema } from "./schema/session.schema";

function routes(app: Express){

    //app.get("/api/books/:booksId",validateResource(getBookSchema),getBookHandler);
    app.post('/api/users', validateRes(createUserSchema), createUserHandler)
    app.post('/api/sessions', validateRes(createSessionSchema), createUserSessionHandler)
    app.get('/api/sessions', getUserSessionsHandler)

}

export default routes;