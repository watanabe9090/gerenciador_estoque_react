import { ApiCore } from "../ultilities/core";

const url = 'marcas';

const apiMarcas = new ApiCore({
  getAll: true,
  getSingle: true,
  getByParam: true,
  post: true,
  put: true,
  delete: true,
  url: url
});

export default apiMarcas;