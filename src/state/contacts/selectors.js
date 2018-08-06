import { createSelector } from 'reselect';

const checkAddressIsSelected = (state, address) => {
  const { contacts: { payload: { selectedAddress } } } = state;

  return selectedAddress.street === address.street;
};

export const addressIsSelectedSelector = createSelector(
  checkAddressIsSelected,
  isSelected => isSelected
);
