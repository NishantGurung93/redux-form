import privacyReducer from '../privacySlice';

describe('privacySlice', () => {
  const initialState = {
    trayEmail: false,
    otherEmail: false,
  };

  it('should return inital state', () => {
    expect(privacyReducer(undefined, {})).toEqual(initialState);
  });

  it('should return when receiving privacy/submitPrivacy', () => {
    const action = {
      type: 'privacy/submitPrivacy',
      payload: {
        trayEmail: true,
        otherEmail: true,
      }
    };

    expect(privacyReducer(undefined, action)).toEqual(action.payload);
  });
});
