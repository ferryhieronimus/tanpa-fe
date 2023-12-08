export async function handleResponse<T>(response: Response): Promise<T> {
  const contentType = response.headers.get("content-type");

  if (contentType && contentType.includes("application/json")) {
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data as T;
  } else {
    throw new Error(`Something bad happened. Please try again.`);
  }
}

