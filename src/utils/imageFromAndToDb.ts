import type { Request } from "express";

export function getImageString(buffer: Uint8Array) {
  return Buffer.from(buffer).toString("base64");
}

export function getBufferFromReqBody(req: Request) {
  if (typeof req.body.image === "string" && req.body.image.length > 0)
    return Buffer.from(req.body.image, "base64");

  return null;
}
