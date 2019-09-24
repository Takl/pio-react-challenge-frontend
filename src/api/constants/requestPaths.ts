const API_ROOT_PATH = "http://localhost:4200";
export const USERS_PATH = `${API_ROOT_PATH}/users`;
export const SIGN_IN_PATH = `${USERS_PATH}/sign-in`;
export const SIGN_UP_PATH = `${USERS_PATH}/sign-up`;
export const APPOINTMENTS_PATH = `${API_ROOT_PATH}/appointments`;
export const getUserAppointmentsPath = (id: string): string =>
  `${USERS_PATH}/${id}/appointments`;
export const appointmentShowPath = (id: string): string =>
  `${APPOINTMENTS_PATH}/${id}`;
