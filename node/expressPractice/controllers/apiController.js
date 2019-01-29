

module.exports = function(app) {

  app.get('/api/person/:id', function(req, res) {
    // get the data from the database
    res.json({ firstName: 'Alex', lastName: 'Chang'});
  });

  app.post('/api/person', function(req, res) {
    // save to the database
  });

  app.delete('/api/person/:id', function(req, res) {
    // delete from the database 
  });
}