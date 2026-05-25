import { hoursLoad } from "../form/hours-load.js";

//Seleciona o input da data
const selectedDate = document.getElementById("date");

export function schedulesDay() {
  //Obtém a tada do input
  const date = selectedDate.value;

  //Renderia as horas disponíveis
  hoursLoad({ date });
}
