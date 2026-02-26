// Task 10: User Data Fetch using Async and Await with Error Handling

export async function getUserData(): Promise<any> {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await res.json();
    console.log("user data", data);
    return data;
  } catch (err) {
    console.error("error fetching user", err);
    throw err;
  }
}

// example invocation
getUserData().catch(() => {});
