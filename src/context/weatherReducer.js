const ACTIONS = {
  GET_WEATHER_CURRENT_LOCATON: 'GET_WEATHER_CURRENT_LOCATION',
  GET_FIVE_DAY_FORECAST: 'GET_FIVE_DAY_FORECAST',
  GET_WEATHER_CURRENT_LOCATION_FAHENRIENT: 'GET_WEATHER_CURRENT_LOCATION_FAHENRIENT',
  GET_FIVE_DAY_FORECAST_FAHENRIENT: 'GET_FIVE_DAY_FORECAST_FAHENRIENT',
};

export default (state, action) => {
  switch (action.type) {
    case ACTIONS.GET_WEATHER_CURRENT_LOCATON:
      return {
        ...state,
        weatherInfo: action.payload,
      };
    case ACTIONS.GET_FIVE_DAY_FORECAST:
      return {
        ...state,
        forecasts: action.payload,
      };
      case ACTIONS.GET_WEATHER_CURRENT_LOCATION_FAHENRIENT:
        return{
          ...state,
          weatherInfoFahenrient:action.payload
        };
        case ACTIONS.GET_FIVE_DAY_FORECAST_FAHENRIENT:
          return{
            ...state,
            forecastsFahenrient:action.payload
          }

    default:
      return state;
  }
};
