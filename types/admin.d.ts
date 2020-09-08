// Organization requests
export interface PrimaryContact {
  id: string;
}

export interface CreateOrganizationParams {
  name: string;
  website: string;
  primary_contact: PrimaryContact;
}

export interface UpdateOrganizationParams extends CreateOrganizationParams {
  id: string;
}
