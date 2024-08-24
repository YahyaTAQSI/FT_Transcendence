import { userToken } from "../Atoms/userToken";

const mheaders = {
  Authorization: `Bearer ${userToken}`,
  "Content-Type": "application/json",
};

const getRank = (xp: number) => {
  if (xp >= 0 && xp <= 100) return "Beginner";
  if (xp > 100 && xp <= 200) return "Intermediate";
  if (xp > 200 && xp <= 300) return "Expert";
  if (xp > 300 && xp <= 400) return "Master";
  if (xp > 400 && xp <= 500) return "Grandmaster";
  if (xp > 500) return "Apex";
};

export { mheaders, getRank };
