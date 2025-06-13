import { createCookieSessionStorage } from "@remix-run/node";
import { createThemeSessionResolver } from "remix-themes";

const isProduction = process.env.NODE_ENV === "production";

const themeSessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__theme",
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secrets: ["theme-secret-key"],
    secure: isProduction,
    maxAge: 60 * 60 * 24 * 365,
  },
});

export const themeSessionResolver =
  createThemeSessionResolver(themeSessionStorage);
