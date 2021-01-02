import userReducer from '../userSlice';

describe('userSlice', () => {
  const initialState = {
    name: '',
    role: '',
    email: '',
    password: '',
  };

  it('should return inital state', () => {
    expect(userReducer(undefined, {})).toEqual(initialState);
  });

  it('should return when receiving user/submitDetails', () => {
    const action = {
      type: 'user/submitDetails',
      payload: {
        name: 'Tom Hardy',
        role: 'Bane',
        email: 'tom@hardy.com',
        password: 'tom@bane.com',
      }
    };

    expect(userReducer(initialState, action)).toEqual(action.payload);
  });
});
