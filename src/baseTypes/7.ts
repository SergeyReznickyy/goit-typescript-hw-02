/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

const enum WeekDays {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

function isWeekend(weekDay: WeekDays): boolean {
  switch (weekDay) {
    case WeekDays.Monday:
    case WeekDays.Tuesday:
    case WeekDays.Wednesday:
    case WeekDays.Thursday:
    case WeekDays.Friday:
      return false;
    case WeekDays.Saturday:
    case WeekDays.Sunday:
      return true;
  }
}

const today: WeekDays = WeekDays.Monday;
console.log(`Is ${today} a weekend? ${isWeekend(today)}`);
