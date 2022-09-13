import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    getPosts().map((post) => {
      return db.post.create({ data: post });
    })
  );
}

seed();

function getPosts() {
  return [
    {
      title: "Road worker",
      content: `I never wanted to believe that my Dad was stealing from his job as a road worker. But when I got home, all the signs were there.`,
    },
    {
      title: "Frisbee",
      content: `I was wondering why the frisbee was getting bigger, then it hit me.`,
    },
    {
      title: "Trees",
      content: `Why do trees seem suspicious on sunny days? Dunno, they're just a bit shady.`,
    },
    {
      title: "Skeletons",
      content: `Why don't skeletons ride roller coasters? They don't have the stomach for it.`,
    },
  ];
}