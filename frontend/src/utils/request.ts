const Api = {
  cleanRequest: async (method: string, path: string, body?: any) => {
    body = JSON.stringify(body);

    const req = await fetch(path, {
      method,
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
  request: async (method: string, path: string, body?: any) => {
    body = JSON.stringify(body);

    const token = localStorage.getItem("token");

    const req = await fetch(path, {
      method,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        Authorization: `Bearer ${token}`,
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

export default Api;
