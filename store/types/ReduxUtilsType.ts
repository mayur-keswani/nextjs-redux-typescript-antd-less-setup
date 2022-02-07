export type ActionDispatch = {
  type: string;
  payload: any;
};

export type ActionCreators = (payload: any) => ActionDispatch;
