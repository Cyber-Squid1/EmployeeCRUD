const DEFAULT_PAGE_NUMBER = 1;
const DEFAULT_PAGE_LIMIT = 0;

// Getting the query parameters Offset and Limit from the request
// Skip: Number of objects/Rows to be skipped
// Limit: Number of objects/Rows to be fetched
function getPagination(query) {
  const offset = Math.abs(query.offset) || DEFAULT_PAGE_NUMBER;
  const limit = Math.abs(query.limit) || DEFAULT_PAGE_LIMIT;
  // Calculating the number of records to be skipped
  const skip = (offset - 1) * limit;

  return {
    skip,
    limit,
  };
}

module.exports = {
  getPagination,
};