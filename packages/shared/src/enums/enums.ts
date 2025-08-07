export enum Status {
  NOT_INTERESTED = "NOT_INTERESTED",
  COMPLETED = "COMPLETED",
  IN_PROGRESS = "IN_PROGRESS",
}

export const values = Object.values(Status);
export type StatusType = (typeof values)[number];
