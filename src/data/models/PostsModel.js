import Model from '../index';

export default class PostsModel extends Model {
  static get tableName() {
    return 'posts';
  }

  static get idColumn() {
    return 'id';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['title'],
      properties: {
        id: { type: 'string', format: 'uuid' },
        title: { type: 'string', minLength: 1, maxLength: 255 },
        body: { type: 'string', maxLength: 1000 },
      },
    };
  }
}
