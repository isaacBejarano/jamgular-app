export interface i_FirestoreDB {
  documents: i_FirestoreCollections[];
}

export interface i_FirestoreCollections {
  name: string;
  fields: {};
  createTime: string;
  updateTime: string;
}

export interface i_FirestoreIdioms {
  f1: { stringValue: string };
  f2: { stringValue: string };
}

export interface i_FirebaseAuth {
  localId: string;
  idToken: string;
  expiresIn: string;
}
