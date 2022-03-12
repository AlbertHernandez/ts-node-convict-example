import Router from "koa-router";

const usersRouter = new Router({
  prefix: "/users",
});

usersRouter.get("/", (ctx) => {
  ctx.body = {
    users: [{ id: 1, name: "juan" }],
  };
});

export { usersRouter };
