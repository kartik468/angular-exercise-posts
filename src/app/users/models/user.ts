export interface Geo {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface Contact {
  type: string;
  value: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  contacts: Contact[];
  phone: string;
  website: string;
  company: Company;
}
