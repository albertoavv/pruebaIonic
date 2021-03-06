export interface ListadoUsuarios {
  results: Result[];
  info: Info;
}

export interface Info {
  seed: string;
  results: number;
  page: number;
  version: string;
}

export interface Result {
  gender?: string;
  name?: Name;
  location?: Location;
  email?: string;
  login?: Login;
  dob?: Dob;
  registered?: Dob;
  phone?: string;
  cell?: string;
  id?: string;
  picture?: Picture;
  nat?: string;
}

 export interface Picture {
  large?: string;
  medium?: string;
  thumbnail?: string;
}

interface Id {
  name: string;
  value?: string;
}

interface Dob {
  date: string;
  age: number;
}

interface Login {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

interface Location {
  street: string;
  city: string;
  state: string;
  postcode: number;
  coordinates: Coordinates;
  timezone: Timezone;
}

export interface Timezone {
  offset: string;
  description: string;
}

export interface Coordinates {
  latitude: string;
  longitude: string;
}

export interface Name {
  title: string;
  first: string;
  last: string;
}