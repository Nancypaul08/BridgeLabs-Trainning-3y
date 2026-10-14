// Weather Activity Planner
const temperature = 24;
const isRaining = false;
const windSpeed = 12;

let activity;
if (isRaining) {
  activity = "Stay indoors with hot coffee.";
} else if (temperature > 35) {
  activity = "Go swimming.";
} else if (temperature < 15 && windSpeed > 20) {
  activity = "Too cold and windy — stay home.";
} else if (temperature >= 15 && temperature <= 35 && !isRaining && windSpeed <= 20) {
  // A comfortable temperature, no rain, and manageable wind make a walk pleasant.
  activity = "Perfect day for a walk.";
} else {
  activity = "Check the weather and choose a comfortable activity.";
}

console.log(activity);
