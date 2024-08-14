export interface Invoice {
    id: number;
    client: string;  // Updated from 'customer' to 'client'
    amount: number;
    date: string; // Date in YYYY-MM-DD format
    status: string;
  }
  