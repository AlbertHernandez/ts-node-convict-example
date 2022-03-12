import Koa from "koa";
import http from "http";
import { usersRouter } from "./routes";
import { config } from "../infrastructure/config";

export class UsersApp {
  private koa: Koa;
  readonly port: number;
  httpServer?: http.Server;

  constructor() {
    this.port = config.get("server.port");
    this.koa = new Koa();

    this.koa.use(usersRouter.middleware());
  }

  async start(): Promise<void> {
    this.httpServer = await this.koa.listen(this.port);
    const env = config.get("env");
    console.log(
      `Users Backend App is running at http://localhost:${this.port} in ${env} mode`
    );
  }
}
