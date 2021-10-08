export interface i_RefraneroAPI {
  documents: i_Idiom[];
}

export interface i_Idiom {
  id: number;
  createTime: string;
  fields: {
    f1: {
      stringValue: string;
    };
    f2: {
      stringValue: string;
    };
  };
  name: string;
  updateTime: string;
}
