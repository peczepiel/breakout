import { ServiceRequest } from "./ServiceRequest.ts";

export interface Flower extends ServiceRequest {
  flowerType: string;
  receiverName: string;
  date: string;
}
