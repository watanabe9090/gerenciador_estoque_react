import { ApiCore } from "../ultilities/core";

const url = 'itens_estocados';

const apiItensEstocados = new ApiCore({
  getAll: true,
  getSingle: true,
  getByParam: false,
  post: true,
  put: true,
  delete: true,
  url: url
});

export default apiItensEstocados;