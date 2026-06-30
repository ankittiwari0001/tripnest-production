import { create } from "zustand";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isInitialized: boolean;

  login: (
    user: User,
    token: string
  ) => void;

  logout: () => void;

  initializeAuth: () => void;
}

export const useAuthStore =
  create<AuthState>((set) => ({
    user: null,

    token: null,

    isInitialized: false,

    login: (
      user,
      token
    ) => {
      localStorage.setItem(
        "token",
        token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(user)
      );

      set({
        user,
        token,
      });
    },

    logout: () => {
      localStorage.removeItem(
        "token"
      );

      localStorage.removeItem(
        "user"
      );

      set({
        user: null,
        token: null,
      });
    },

    initializeAuth: () => {
      try {
        const token =
          localStorage.getItem(
            "token"
          );

        const user =
          localStorage.getItem(
            "user"
          );

        if (
          token &&
          user
        ) {
          set({
            token,
            user:
              JSON.parse(
                user
              ),
            isInitialized: true,
          });

          return;
        }

        set({
          isInitialized: true,
        });
      } catch {
        set({
          isInitialized: true,
        });
      }
    },
  }));