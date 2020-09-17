export interface UserFields {
    firstName?: string;
    lastName?: string;
    company?: string;
    region?: string;
    job?: string;
  }

export interface ExtreamAuthUser {
  username: string;
  password: string;
  user_type: string;
}

export interface ExtreamUser extends ExtreamAuthUser {
  id: string;
  email: string;
  fields: UserFields;
}
