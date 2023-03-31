import { NavigationGuardNext, RouteLocationNormalized } from "vue-router";
import { useUserStore } from "@/stores/user";

export function guardCheckAuth(
  to: RouteLocationNormalized,
  _: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const requiresNotLogged = to.matched.some((record) => record.meta.requiresNotLogged);
  const userStore = useUserStore();

  if (requiresAuth) {
    if (userStore.user) next();
    else next({ query: { ...to.query, lf: "true" } });
  } else {
    if (userStore.user && requiresNotLogged) next({ name: "home" });
    else next();
  }
}
