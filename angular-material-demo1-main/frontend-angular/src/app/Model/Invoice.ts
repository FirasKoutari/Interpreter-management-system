import { Client } from "./Client";

export interface Invoice {
    id: number;
    client: Client;  // Updated from 'customer' to 'client'
    amount: number;
    date: string; // Date in YYYY-MM-DD format
    status: string;
  }
  