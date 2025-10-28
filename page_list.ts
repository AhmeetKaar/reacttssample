import loc from "./app/localization/localization";

export const ExampleList = [
  {
    id: 1,
    level: 1,
    name: loc.t("counter"),
    description: loc.t("counterDescription"),
    route: "/example-1/Counter",
  },
  {
    id: 2,
    level: 2,
    name: loc.t("userList"),
    description: loc.t("userListDescription"),
    route: "/example-2/UserList",
  },
  {
    id: 3,
    level: 3,
    name: loc.t("userAuthAndThemeToggle"),
    description: loc.t("userAuthAndThemeToggleDescription"),
    route: "/example-3/HomePage",
  },
];
