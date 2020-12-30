import dotenv from 'dotenv';

require('module-alias/register');

dotenv.config();
require('./src/server.js');
