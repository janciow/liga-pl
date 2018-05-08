var localtunnel = require('localtunnel');
localtunnel(5000, { subdomain: 'janciowheroku' }, function(err, tunnel) {
  console.log('LT running')
});