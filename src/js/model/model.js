export const store = {
  searchText: null,
};

export const addSearchText = (element) => {
  store.searchText = element.value;
};
