import { Client } from "./Client";
import { Interpreter } from "./Interpreter";

export interface Appointment {
    id: number;
    date: string; // Date in YYYY-MM-DD format
    heure: string; // Time in HH:MM:SS format
    client : Client;
    interpreter: Interpreter;
}
