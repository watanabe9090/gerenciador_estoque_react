import { ApiCore } from "../ultilities/core";

const url = 'fornecedores';

const apiFornecedores = new ApiCore({
  getAll: true,
  getSingle: true,
  getByParam: false,
  post: true,
  put: true,
  delete: true,
  url: url
});

export default apiFornecedores;