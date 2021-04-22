import {
  successResponse,
  errorResponse,
  messages,
  status,
  bcrypt,
} from "../utils";

/**
 * @method registerUser
 * @description Method for user registration
 * @param {object} req - The Request Object
 * @param {object} res - The Response Object
 * @returns {object} response body object
 */
const registerUser = async (req, res) => {};

/**
 * @method signInUser
 * @description Method for user sign in
 * @param {object} req - The Request Object
 * @param {object} res - The Response Object
 * @returns {object} response body object
 */

const signInUser = async (req, res) => {};

/**
 * @method forgotPassword
 * @description Method for user forgot password
 * @param {object} req - The Request Object
 * @param {object} res - The Response Object
 * @returns {object} response body object
 */

const forgotPassword = async (req, res) => {};

/**
 * @method resetPassword
 * @description Method for user reset password
 * @param {object} req - The Request Object
 * @param {object} res - The Response Object
 * @returns {object} response body object
 */

const resetPassword = async (req, res) => {};

/**
 * @method confirmEmail
 * @description Method for user email confirmation
 * @param {object} req - The Request Object
 * @param {object} res - The Response Object
 * @returns {object} response body object
 */

const confirmEmail = async (req, res) => {};

/**
 * @method resendConfirmEmail
 * @description Method for user to resend email confirmation
 * @param {object} req - The Request Object
 * @param {object} res - The Response Object
 * @returns {object} response body object
 */
const resendConfirmEmail = async (req, res) => {};

export default {
  registerUser,
  signInUser,
  confirmEmail,
  resendConfirmEmail,
  forgotPassword,
  resetPassword,
};
