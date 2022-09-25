const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoints = {
  auth: {
    login: `${API}/api/${VERSION}/auth/login`,
    profile: `${API}/api/${VERSION}/auth/profile`,
  },
  products: {
    getProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    getAllProducts: () => `${API}/api/${VERSION}/products`,
  },
  users: {
    users: `${API}/${VERSION}/users`,
    isAvailable: `${API}/${VERSION}/users/is-available`,
  },
  categories: {
    getCategorie: (id) => `${API}/${VERSION}/categories/${id}`,
    getAllCategories: () => `${API}/${VERSION}/categories`,
  },
  files: {
    uploadFile: (fileName) => `${API}/${VERSION}/files/${fileName}`,
    uploadFiles: () => `${API}/${VERSION}/files/upload`,
  },
};

export default endPoints;
