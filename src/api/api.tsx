import { getCookie } from "cookies-next";

const cookie = getCookie("auth");
const authCookie = cookie ? JSON.parse(cookie as string) : "";
// const { token } = authCookie;

const token = authCookie?.token;

export const postApiWithNoAuthentication = async (
  object: unknown,
  path: string
) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(object),
    });
    return res.json();
  } catch (err) {
    console.log(err);
    return { error: true, message: "Server Problem" };
  }
};
// postApiWithAuthentication
export const postApiWithAuthentication = async (
  object: unknown,
  path: string
) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/${path}`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(object),
    });
    return res.json();
  } catch (err) {
    console.log(err);
    return { error: true, message: "Server Problem" };
  }
};
// patchApiWithAuthentication
export const patchApiWithAuthentication = async (
  object: unknown,
  path: string
) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/${path}`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(object),
    });
    return res.json();
  } catch (err) {
    console.log(err);
    return { error: true, message: "Server Problem" };
  }
};

// getApiWithAuthentication
export const getApiWithAuthentication = async (path: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/${path}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return res.json();
  } catch (err) {
    console.log("get api", err, token);
    return { error: true, message: "Server Problem" };
  }
};

// deleteSingleApiWithAuthentication
export const deleteSingleApiWithAuthentication = async (
  path: string,
  id: string
) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/${path}/${id}`,
      {
        method: "Delete",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    return res.json();
  } catch (err) {
    console.log(err);
    return { error: true, message: "Server Problem" };
  }
};

// postApiImage
export const postApiImage = async (formData: FormData, path?: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/file-upload${path}`,
      {
        method: "POST",
        headers: {
          authorization: `Bearer ${token}`,
        },
        body: formData,
      }
    );
    return res.json();
  } catch (err) {
    console.log(err);
    return { error: true, message: "Server Problem" };
  }
};

// getApiWithAuthentication
export const getApiWithServer = async (path: string, token: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/${path}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return res.json();
  } catch (err) {
    console.log("get api", err, token);
    return { error: true, message: "Server Problem" };
  }
};
