import { IServiceAction, IServiceState, Service } from '@src/types';
import { SET_SERVICE } from '../actions/serviceSwitcherActions';

const initialState: IServiceState = {
  service: 'daily',
};

const serviceSwitcherReducer = (state: IServiceState = initialState, action: IServiceAction): IServiceState => {
  switch (action.type) {
    case SET_SERVICE: {
      return { ...state, service: action.service as Service };
    }
    default:
      return state;
  }
};

export default serviceSwitcherReducer;
