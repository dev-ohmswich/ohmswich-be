import jwt from "jsonwebtoken";
import config from "../config";

/**
 * Authenticate the user jwt.
 * Sets the authenticated user on request
 *
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 *
 * @return {Function}
 */
export default async (req, res, next) => {
  try {
    const token =
      req.body.access_token ||
      req.headers.access_token ||
      req.query.access_token;

    const payload = jwt.verify(token, config.jwtSecret);
    // const authUser = await models.UserModel.findById(payload.id);
    const response = authUser.toJSON();
    delete response.password;

    req.authUser = response;

    return next();
  } catch (error) {
    return res.status(401).json({
      message: "Unauthenticated.",
    });
  }
};
