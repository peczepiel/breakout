// generic service request router
import express, { Router } from "express";
import PrismaClient from "../bin/database-connection.ts";

const router: Router = express.Router();

router.get("/", async function (req, res) {
  const genericServiceRequest = await PrismaClient.serviceRequest.findMany({});
  res.json(genericServiceRequest);
});

export default router;
