import contactReducer from './contactSlice';

describe('contact reducer', () => {
  it('should handle initial state', () => {
    expect(contactReducer(undefined, { type: 'unknown' })).toEqual({
      name: 'john doe',
      email: 'john@doe.com',
      message: 'awesome message!',
      status: 'idle',
    });
  });
});
