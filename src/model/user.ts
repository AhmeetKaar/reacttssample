import { Company } from "./company";
import { Address } from "./address";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export function userFromJson(json: any): User {
  return {
    id: json.id,
    name: json.name,
    username: json.username,
    email: json.email,
    address: json.address,
    phone: json.phone,
    website: json.website,
    company: json.company,
  };
}