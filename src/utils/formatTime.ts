const formatTime = (unformattedTime: string) => {
  const time = new Date(unformattedTime);
  return [time.getHours(), time.getMinutes()].map((hrOrMin) => (hrOrMin < 10 ? `0${hrOrMin}` : hrOrMin)).join(':');
};

export default formatTime;
