import { Router, type IRouter } from "express";
import healthRouter from "./health";
import canvasProxyRouter from "./canvas-proxy";

const router: IRouter = Router();

router.use(healthRouter);

router.use(canvasProxyRouter);

export default router;
