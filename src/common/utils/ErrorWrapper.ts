import { ConflictError } from "../../exceptions/ConflictError.js";
import { NotFoundError } from "../../exceptions/NotFoundError.js";
import { PrismaClientKnownRequestError } from "../../generated/prisma/internal/prismaNamespace.js";
import { PRISMA_CODES } from "../constants/PrismaErrorCodes.js";

export const mapPrismaError = (error:unknown,entity:string,identifier?:string) =>{
    if (!(error instanceof PrismaClientKnownRequestError)) {
    throw error;
  }

  switch (error.code) {
    case PRISMA_CODES.RECORD_NOT_FOUND:
      throw new NotFoundError(
        identifier ? `${entity} not found: ${identifier}` : `${entity} not found`
      );

    case PRISMA_CODES.UNIQUE_CONSTRAINT:
      throw new ConflictError(`${entity} already exists`);

    default:
      throw error;
  }
}