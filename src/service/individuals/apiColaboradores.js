import { ApiCore } from "../ultilities/core";

const url = 'colaboradores';

const apiColaboradores = new ApiCore({
  getAll: true,
  getSingle: true,
  getByParam: false,
  post: true,
  put: true,
  delete: true,
  url: url
});

export default apiColaboradores;