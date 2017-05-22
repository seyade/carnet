const initialState = {
  carnets: []
};

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case 'SAVE_NEW_CARD_DATA':
      return [
        ...state,
        Object.assign({}, action.carnet)
      ];
    default:
      return state;

  }
}
