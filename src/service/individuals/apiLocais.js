import { ApiCore } from "../ultilities/core";

const url = 'locais';

const apiLocais = new ApiCore({
  getAll: true,
  getSingle: true,
  getByParam: false,
  post: true,
  put: true,
  delete: true,
  url: url
});

export default apiLocais;