import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ cookies }) => {
  const dark = cookies.get("dark-theme");

  return {
    darkTheme: dark === "true",
  };
};
