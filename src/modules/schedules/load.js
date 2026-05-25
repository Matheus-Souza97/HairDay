import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { hoursLoad } from "../form/hours-load.js";

//Seleciona o input da data
const selectedDate = document.getElementById("date");

export async function schedulesDay() {
  //Obtém a tada do input
  const date = selectedDate.value;

  //Buscar na API os agendamentos
  const dailySchedules = await scheduleFetchByDay({ date });
  console.log(dailySchedules);

  //Renderia as horas disponíveis
  hoursLoad({ date });
}
