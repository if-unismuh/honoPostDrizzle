import { db, client } from "db";

export async function passwordCheck(password: string, hash: string) {
  const passw = new Bun.CryptoHasher("md5").update(password).digest("hex");
  return passw === hash;
}

export async function insertData(namaTable: any, data: object) {
  try {
    client.connect();
    return await db.insert(namaTable).values(data);
  } catch (error: any) {
    return error;
  }
}
