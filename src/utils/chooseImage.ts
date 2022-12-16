import WeatherImages from '@src/constants/weatherImages';

export const chooseImage = (weatherSummary: string) => {
  let bgImage = null;
  let mainImage = null;
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
    weatherSummary.toLowerCase().includes('freez')
  ) {
    bgImage = WeatherImages.snow.bg;
    mainImage = WeatherImages.snow.main;
  }

  return { bgImage, mainImage };
};

export default chooseImage;
