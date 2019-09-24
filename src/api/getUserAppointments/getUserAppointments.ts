import Axios from "axios";
import { getUserAppointmentsPath } from "../constants/requestPaths";

const getUserAppointments = async (
  id: number
): Promise<AppointmentCollection> => {
  return await Axios.get(getUserAppointmentsPath(id.toString())).then(
    (response): AppointmentCollection => response.data
  );
};

export default getUserAppointments;
