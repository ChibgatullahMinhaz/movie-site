import AppError from "../error/AppError.js";
import httpStatus from 'http-status';
import admin from "../config/firebase.admin.js";
import adminModel from "../modules/auth/adminModel/user.model.js";
import User from "../modules/auth/user.model.js";

export const verifyFirebaseToken = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader?.startsWith('Bearer ')) {
        throw new AppError(httpStatus.UNAUTHORIZED, "Unauthorized: No token provided")
    }
    const token = authHeader.split(' ')[1];

    try {
        const decodedToken = await admin.auth().verifyIdToken(token);
        req.user = decodedToken;

        // Parallel DB query for admin & general user
        const [adminUser, generalUser] = await Promise.all([
            adminModel.findOne({ email: decodedToken.email }),
            User.findOne({ email: decodedToken.email })
        ]);

        if (!adminUser && !generalUser) {
            return next(new AppError(httpStatus.NOT_FOUND, 'User not found in database'));
        }

        // Attach role to req.user
        req.user.role = adminUser ? adminUser.role : generalUser.role;


        next();
    } catch (error) {
        return next(new AppError(httpStatus.UNAUTHORIZED, "Firebase token verification failed"));

    }
}

export const verifyTokenOnly = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) return next(new AppError(401, "No token provided"));

    const token = authHeader.split(' ')[1];

    try {
        const decodedToken = await admin.auth().verifyIdToken(token);
        req.user = decodedToken;
        next();
    } catch (err) {
        next(new AppError(401, "Invalid token"));
    }
};



// Admin-only route
export const isAdmin = (req, res, next) => {
    if (req.user?.role !== 'admin') {
        return next(new AppError(httpStatus.UNAUTHORIZED, 'Access denied - Admins only'));
    }
    next();
};

// Admin + general user route
export const requireOwnAccess = (req, res, next) => {
    if (req.user.role === 'admin') return next();
    const targetEmail = req.user?.email;

      if (!targetEmail) {
        return next(new AppError(httpStatus.UNAUTHORIZED, 'Invalid user token'));
    }
    next();
};
