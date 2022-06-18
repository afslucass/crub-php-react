const AdminAPI = {
  login: async (login: string, password: string) => {
    const body = JSON.stringify({
      login,
      password,
    });

    const req = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      },
      body,
    });

    const data = await req.json();

    if (!req.ok) {
      throw new Error(data.message);
    }

    return data;
  },
};

export default AdminAPI;
