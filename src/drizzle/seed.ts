import { db, client } from "db";
import { users } from "schema";
(async () => {
  try {
    client.connect();
    await db.insert(users).values({
      username: "admin2",
      password: await Bun.password.hash("samaKemarin00"),
      role: "admin",
    });
    console.log("Seed success");
    client.end();
  } catch (error: any) {
    console.error(error.message);
  }
})();
