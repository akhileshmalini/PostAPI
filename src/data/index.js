import Knex from 'knex';
import { Model } from 'objection';

const environment = process.env.NODE_ENV || 'development';
const configuration = require('../../knexfile')[environment];

const database = Knex(configuration);

Model.knex(database);

export default Model;
