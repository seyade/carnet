export const createCard = (carnet) => {
  return {
    type: 'CREATE_CARNET_CARD',
    carnet
  }
};

export const saveNewCardData = (data) => {
  return {
    type: 'SAVE_NEW_CARD_DATA',
    data
  }
};
