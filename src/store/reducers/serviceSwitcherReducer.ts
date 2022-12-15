import { SET_SERVICE } from '../actions/serviceSwitcherActions';

type Service = 'daily' | 'hourly';

interface IState {
  service: Service;
}

const initialState: IState = {
  service: 'daily',
};
interface IAction {
  type: string;
  service: string;
}

const serviceSwitcherReducer = (state: IState = initialState, action: IAction): IState => {
  switch (action.type) {
    case SET_SERVICE: {
      return { ...state, service: action.service as Service };
    }
    default:
      return state;
  }
};

export default serviceSwitcherReducer;
