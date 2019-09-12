module.exports = function(app) {
  app.dataSources.mysqlDS.autoupdate("Account", function(err) {
    if (err) throw err;

    app.models.Account.create([
      {
        email: "john.doe@ibm.com",
        createdAt: new Date(),
        lastModifiedAt: new Date()
      },
      {
        email: "jane.doe@ibm.com",
        createdAt: new Date(),
        lastModifiedAt: new Date()
      }
    ]);
  });
};
