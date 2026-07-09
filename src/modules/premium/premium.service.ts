import { prisma } from "../../lib/prisma";

const getPremiumContent = async () => {
  const posts = await prisma.post.findMany({
    where: {
      IsPremium: true,
    },
  });
  return posts;
};

export const premiumServices = {
  getPremiumContent,
};
