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

export class Admin {
  private socket: SocketIOClient.Socket | null = null;
  /**
   * Create an instance of the admin sdk
   */
  constructor (socket: SocketIOClient.Socket) {
    this.socket = socket
  }
}
