export interface Event {
    id: number;
    title: string;
    start: string; // Date in ISO format (e.g., "2024-08-25T10:00:00")
    end?: string; // Optional end date in ISO format
    color: {
      primary: string;
      secondary: string;
    };
    draggable: boolean;
    resizable?: {
      beforeStart: boolean;
      afterEnd: boolean;
    };
    allDay?: boolean;
    interpreterId: number; // Foreign key to relate with an Interpreter
  }
  