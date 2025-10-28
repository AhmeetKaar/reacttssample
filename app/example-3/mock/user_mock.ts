import { User } from "@/src/model/user";

export const mockUsers: User[] = [
  {
    id: 1,
    name: "Ahmet Kar",
    username: "ahmeetkaar",
    email: "ahmet@example.com",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Istanbul",
      zipcode: "34000",
      geo: {
        lat: "41.0082",
        lng: "28.9784",
      },
    },
    phone: "1234567890",
    website: "ahmet.dev",
    company: {
      name: "Dev Company",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Zeynep Yılmaz",
    username: "zeynyilmaz",
    email: "zeynep@example.com",
    address: {
      street: "Main Street",
      suite: "Flat 42",
      city: "Ankara",
      zipcode: "06000",
      geo: {
        lat: "39.9334",
        lng: "32.8597",
      },
    },
    phone: "1234567890",
    website: "zeynep.co",
    company: {
      name: "Innovasyon Ltd",
      catchPhrase: "Proactive didactic contingency",
      bs: "empower strategic solutions",
    },
  },
  {
    id: 3,
    name: "Mehmet Can",
    username: "mehmetcan",
    email: "mehmet@example.com",
    address: {
      street: "Elm Avenue",
      suite: "B Blok, No:12",
      city: "Izmir",
      zipcode: "35000",
      geo: {
        lat: "38.4192",
        lng: "27.1287",
      },
    },
    phone: "1234567890",
    website: "mehmetcan.com",
    company: {
      name: "Tech Solutions",
      catchPhrase: "User-centric logistical synergy",
      bs: "synergize scalable platforms",
    },
  },
];
