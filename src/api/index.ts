export async function checkUsers(username: string) {
  try {
    const users = await fetch("https://sicekcok.if.unismuh.ac.id/graphql", {
      method: "POST",
      body: JSON.stringify({
        query: `query{ mahasiswaUser(nim: "${username}"){   nim,   nama,   prodi,   passwd }}`,
        variables: {},
      }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await users.json();
    if (data.data.mahasiswaUser === null) {
      throw new Error("Data tidak ditemukan");
    } else {
      return data.data.mahasiswaUser;
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
}
