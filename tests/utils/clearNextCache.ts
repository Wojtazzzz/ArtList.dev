export const clearNextCache = async () => {
  await fetch("http://localhost:3000/api/cache");
};
