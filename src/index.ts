import { database } from "./database";
import { server } from "./server";

const PORT: number = 8000;
const dbURL: string = "mongodb+srv://admin:admin@crud.cja9j.mongodb.net/?retryWrites=true&w=majority&appName=CRUD";


const bootup = async () => {
    try {
        await database.databaseConnect(dbURL);
        await server.startServer(PORT);
    } catch (error) {
        console.log(error);
    }
}

bootup();