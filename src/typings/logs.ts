export type Status = "info" | "success" | "warning" | "error"

export interface Log {
  type: "crawler" | "connection" | "";
  url: string;
  marketplaceType: "shopee" | "tokopedia" | "";
  status: Status;
  title: string;
}

export interface DbLog {
  title: string;
  isLoading: boolean;
  status: Status;
}

export interface Logs {
  log: Log
  dbLog: DbLog
}