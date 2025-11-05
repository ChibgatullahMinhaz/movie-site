import AppError from "../../error/AppError.js";
import sendResponse from "../../utils/sendResponse.js";
import { clearExpiredBans } from "./users.service.js";
import httpStatus from 'http-status';

export const userUnbanned = async (req, res) => {
    try {
     const result =    await clearExpiredBans();

        return sendResponse(res, {
            statusCode: httpStatus.OK,
            success: false,
            message: "Expired bans cleared successfully",
            data: result
        });
    } catch (error) {
        if (error instanceof AppError) {
            throw new AppError(httpStatus.INTERNAL_SERVER_ERROR, 'Expired cannot be success ~~ Server Error ')
        }

        console.error(error);

        return sendResponse(res, {
            statusCode: httpStatus.INTERNAL_SERVER_ERROR,
            success: false,
            message: "Failed to clear expired bans",
            data: null
        });
    }
};

