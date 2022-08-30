export const CalcTemp = (temp, from, to) => {
  if ((from === "K" || "k") && (to === "C" || "c")) {
    return Math.round(temp - 273.15);
  }
  if ((to === "K" || "k") && (from === "C" || "c")) {
    return Math.round(temp + 273.15);
  }
};

export const CalcDigitalTime = (millisecond) => {
  return new Date(millisecond).toLocaleTimeString("en-US-u-hc-h23");
};

export const CalcMeterPerSecToKmPerHour = (speed) => {
  return Math.round(speed * 3.6);
};

export const CalcClockRotation = (deg) => {
  let transform = 90;
  if ((deg > 0 && deg < 180) || (deg > 360 && deg < 540) || deg > 720) {
    transform = "270";
  }
  if ((deg > 180 && deg < 360) || (deg > 540 && deg < 720)) {
    transform = "90";
  }
  return transform;
};
export const CalcRotation = (timeArr) => {
  const hour = +timeArr[0];
  const min = +timeArr[1];
  const timeDegrees = ((min / 60 + hour) / 12) * 360 + 90;
  return timeDegrees;
};

export const CalcUTCTime = () => {
  const getTime = new Date().getTime();
  const getTimezoneOffset = new Date().getTimezoneOffset() * 60000;
  const UTCNow = getTime + getTimezoneOffset;
  return UTCNow;
};

export const ConvertTimeToArray = (time) => {
  const timeStr = time + "";
  const actualTime = timeStr.split("AM")[0].split("PM")[0].split(":");
  return actualTime;
};
