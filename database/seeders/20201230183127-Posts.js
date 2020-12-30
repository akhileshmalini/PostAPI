module.exports = {
  up: (queryInterface) =>
    queryInterface.bulkInsert(
      'Posts',
      [
        {
          id: 'bcff84b1-cb64-49ef-a894-9402666ea5fb',
          title: 'This is Title 1',
          body: 'This is Body 1',
        },
        {
          id: 'ce5020a2-183a-43de-a475-8928204be213',
          title: 'This is Title 2',
          body: 'This is Body 2',
        },
      ],
      {}
    ),

  down: (queryInterface) => queryInterface.bulkDelete('Posts', null, {}),
};
