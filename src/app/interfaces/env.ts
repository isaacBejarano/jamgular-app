export interface i_Env {
  [key: string]: boolean | string | i_Idioms; // indexation
  production: boolean;
  host: string;
  API: string;
  endpoints: i_Idioms;
}

export interface i_Idioms {
  [key: string]: string; // indexation
  slangs: string;
  populars: string;
  months: string;
  //...
}
