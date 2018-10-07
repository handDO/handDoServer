import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import config from 'config';

const User = mongoose.model('User');

const privateKey = config.key.privateKey;
const tokenExpireInMinutes = config.key.tokenExpireInMinutes;

exports.authenticate = function (req, res) {}
exports.verifyToken = function (req, res, next) {};