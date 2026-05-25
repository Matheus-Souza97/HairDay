import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { hoursLoad } from "../form/hours-load.js";
import { schedulesShow } from "../schedules/show.js";

//Seleciona o input da data
const selectedDate = document.getElementById("date");

export async function schedulesDay() {
  //Obtém a tada do input
  const date = selectedDate.value;

  //Buscar na API os agendamentos
  const dailySchedules = await scheduleFetchByDay({ date });

  //Exibe os agendamentod
  schedulesShow({ dailySchedules });
  //Renderia as horas disponíveis
  hoursLoad({ date, dailySchedules });
}
