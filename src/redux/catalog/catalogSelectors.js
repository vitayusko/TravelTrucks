export const selectCatalogItems = (state) => state.catalog.items;
export const selectCatalogStatus = (state) => state.catalog.status;
export const selectCatalogError = (state) => state.catalog.error;
export const selectItemById = (state, itemId) => {
  console.log("selectItemById", itemId); // Добавьте этот лог
  return state.catalog.items.find((item) => item.id === itemId);
};
