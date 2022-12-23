import WeatherImages from '@constants/weatherImages';

export const chooseImage = (weatherSummary: string) => {
  const summary = weatherSummary.toLowerCase();
  const { sun, rain, overcast, snow } = WeatherImages;
  let bgImage = sun.bg;
  let mainImage = sun.main;

  if (summary.includes('rain')) {
    bgImage = rain.bg;
    mainImage = rain.main;
  }
  if (summary.includes('cloud') || summary.includes('fog') || summary.includes('overcast')) {
    bgImage = overcast.bg;
    mainImage = overcast.main;
  }
  if (summary.includes('sun') || summary.includes('clean')) {
    bgImage = sun.bg;
    mainImage = sun.main;
  }
  if (
    summary.includes('snow') ||
    summary.includes('ice') ||
    summary.includes('freez') // The mistake is made on purpose so words like 'freeze/freezing' etc. can be understood
  ) {
    bgImage = snow.bg;
    mainImage = snow.main;
  }

  return { bgImage, mainImage };
};

export default chooseImage;
