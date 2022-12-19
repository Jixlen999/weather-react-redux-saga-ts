import WeatherImages from '@src/constants/weatherImages';

export const chooseImage = (weatherSummary: string) => {
  let bgImage = WeatherImages.sun.bg;
  let mainImage = WeatherImages.sun.main;
  if (weatherSummary.toLowerCase().includes('rain')) {
    bgImage = WeatherImages.rain.bg;
    mainImage = WeatherImages.rain.main;
  }
  if (
    weatherSummary.toLowerCase().includes('cloud') ||
    weatherSummary.toLowerCase().includes('fog') ||
    weatherSummary.toLowerCase().includes('overcast')
  ) {
    bgImage = WeatherImages.overcast.bg;
    mainImage = WeatherImages.overcast.main;
  }
  if (weatherSummary.toLowerCase().includes('sun') || weatherSummary.toLowerCase().includes('clean')) {
    bgImage = WeatherImages.sun.bg;
    mainImage = WeatherImages.sun.main;
  }
  if (
    weatherSummary.toLowerCase().includes('snow') ||
    weatherSummary.toLowerCase().includes('ice') ||
    weatherSummary.toLowerCase().includes('freez') // The mistake is made on purpose so words like 'freeze/freezing' etc. can be understood
  ) {
    bgImage = WeatherImages.snow.bg;
    mainImage = WeatherImages.snow.main;
  }

  return { bgImage, mainImage };
};

export default chooseImage;
