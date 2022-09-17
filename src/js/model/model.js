export const store = {
  searchText: null,
  nextPageToken: null,
};

export const addSearchText = (element) => {
  store.searchText = element.value;
};

export const addStoreNextPageToken = (data) => {
  store.nextPageToken = data.nextPageToken;
};
