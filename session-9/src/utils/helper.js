export function filterData(restaurants, searchText) {
    return restaurants.filter((rest) => rest?.data?.name?.toLowerCase()?.includes(searchText));
}