type AppointmentCollection = AppointmentInterface[];
interface AppointmentInterface {
  id: number;
  userId: number;
  chore: string;
  date: Date;
  status: "pending" | "approved" | "in progress" | "finalized";
  providerId?: number;
  cost: number;
}
