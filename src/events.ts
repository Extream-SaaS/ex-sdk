import { ExtreamUser } from './user'

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
  parent?: string;
  landing_page?: string;
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

export interface ItineraryPayload {
  id: number;
  public_id: string;
  name: string;
  website: string;
  start_date: Date;
  end_date: Date;
  items: string;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
  landing_page?: string;
  event?: string;
}

export interface GetEventItineraryResponse {
  domain: string;
  action: string;
  command: string;
  payload: ItineraryPayload[];
  user: ExtreamUser;
  socketId: string;
}

export interface GetItineraryResponse {
  domain: string;
  action: string;
  command: string;
  payload: ItineraryPayload;
  user: ExtreamUser;
  socketId: string;
}
