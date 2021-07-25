import { ApiCore } from "../ultilities/core";

const url = 'setores';

const apiSetores = new ApiCore({
  getAll: true,
  getSingle: true,
  getByParam: true,
  post: true,
  put: true,
  delete: true,
  url: url
});

export default apiSetores;