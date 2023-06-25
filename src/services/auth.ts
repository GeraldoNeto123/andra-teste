import jwt from "jsonwebtoken";

type SignInRequestData = {
  email: string;
  password: string;
};

type UserData = {
  id: number;
  nmRazao: string;
  token: string;
};

export async function signInRequest(
  data: SignInRequestData
): Promise<UserData> {
  try {
    const password = jwt.sign(
      { usuSenhaLogin: data.password },
      process.env.NEXT_PUBLIC_SECRET_KEY_PASSWORD
    );

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL_API}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          usuEMailLogin: data.email,
          usuSenhaLogin: password,
        }),
      }
    );

    const token: string = res.headers.get("x-token") || "";
    const response = await res.json();

    return {
      id: response.retorno[0].detalhesUsuario.id,
      nmRazao: response.retorno[0].detalhesUsuario.nmRazao,
      token,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
}
