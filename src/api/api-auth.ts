import { handleResponse } from "@/lib/handle-response";
import { CompleteRegistration, User } from "@/types";
import { LoginTypes } from "@/types";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getCurrentUser(): Promise<User> {
  const response = await fetch(`${BASE_URL}/api/v1/users/self`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }

  return response.json();
}

export async function login(data: LoginTypes) {
  const response = await fetch(`${BASE_URL}/api/v1/users/signin`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return handleResponse(response);
}

export async function signup(data: LoginTypes) {
  const response = await fetch(`${BASE_URL}/api/v1/users/signup`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return handleResponse(response);
}

export async function editUser(data: CompleteRegistration) {
  const response = await fetch(`${BASE_URL}/api/v1/users/self`, {
    method: "PUT",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return handleResponse(response);
}

export async function logout() {
  const response = await fetch(`${BASE_URL}/api/v1/users/signout`, {
    method: "POST",
    credentials: "include",
  });

  return handleResponse(response);
}
