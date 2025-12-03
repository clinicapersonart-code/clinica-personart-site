export { COOKIE_NAME, ONE_YEAR_MS, CLINIC_INFO, SERVICES, CONVENIOS } from "@shared/const";

// Logo da clínica
export const APP_LOGO = "/logo.svg";
export const APP_TITLE = "Clínica Personart";

// Placeholder for future auth logic if needed, removing hard dependency on specific env vars
export const getLoginUrl = () => {
  return "/login"; // Default fallback
};
