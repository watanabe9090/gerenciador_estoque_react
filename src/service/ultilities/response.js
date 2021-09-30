export function handleResponse(response) {
  if(response.results) {
    return response.results;
  }
  if (response.data) {
    return response.data;
  }
  return response;
}

export function handleError(error) {
  console.log(error);
  if(error.response) {
    return error.response;
  }
  if (error.data) {
    return error.data;
  }
  return error;
}