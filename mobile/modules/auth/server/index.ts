const API_URL = "http://localhost:3500";

interface AuthData {
  user: string;
  password: string;
}
export const loginAction = async ({ user, password }: AuthData) => {
  const response = await fetch(`${API_URL}/auth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user,
      pwd: password,
    }),
  });

  if (response.status !== 200) {
    throw new Error(
      JSON.stringify({
        status: response.status,
        message: response.statusText,
      })
    );
  }

  return response;
};

export const registerAction = async ({ user, password }: AuthData) => {
  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user,
      pwd: password,
    }),
  });

  if (response.status !== 201) {
    throw new Error(
      JSON.stringify({
        status: response.status,
        message: response.statusText,
      })
    );
  }
  return response;
};
