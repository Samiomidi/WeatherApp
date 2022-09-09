export const iconLink = (icon) =>
  `http://openweathermap.org/img/wn/${icon}@2x.png`;

export const getSearchLink = (city, apiToken) =>
  `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiToken}`;

export const getResultLink = (lat, lon, apiToken) =>
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiToken}`;
export const getForecastLink = (lat, lon, apiToken) =>
  `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiToken}`;
