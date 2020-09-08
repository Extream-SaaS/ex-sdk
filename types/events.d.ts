export interface EventsPayload {
    id: number;
    public_id: string;
    name: string;
    website: string;
    start_date: Date;
    end_date: Date;
    createdBy: string;
    createdAt: Date;
    updatedAt: Date;
    parent?: any;
    landing_page?: any;
    organisation: string;
  }
  
  export interface EventsByOrganizationResponse {
    domain: string;
    action: string;
    command: string;
    payload: EventsPayload[];
    user: ExtreamUser;
    socketId: string;
  }