export const _searchWithRegex = (searchOrder, orderfilterByStore, setFilteredData ) => {


    function escapeRegExp(str) {
      return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
  
    const escapedSearchOrder = escapeRegExp(searchOrder);
  
    setFilteredData(orderfilterByStore.filter((order) => {
      if (escapedSearchOrder.length > 2) {
        return order?.orderNum?.match(new RegExp(escapedSearchOrder, "i"));
      }
        return undefined;
      
  
    }))
  }