import Api from "../utils/request";

const AdminAPI = {
  login: async (login: string, password: string) => {
    const body = {
      login,
      password,
    };

    const data = Api.cleanRequest(
      "POST",
      `${process.env.REACT_APP_API_URL}/login`,
      body
    );

    return data;
  },
};

export default AdminAPI;
