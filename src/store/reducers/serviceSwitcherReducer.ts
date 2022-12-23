import { IServiceAction, IServiceState, Service } from '@src/types';
import { SET_SERVICE } from '@store/actions/serviceSwitcherActions';

const initialState: IServiceState = {
  service: 'daily',
};

const serviceSwitcherReducer = (
  state: IServiceState = initialState,
  { type, payload }: IServiceAction,
): IServiceState => {
  switch (type) {
    case SET_SERVICE: {
      return { ...state, service: payload as Service };
    }
    default:
      return state;
  }
};

export default serviceSwitcherReducer;
