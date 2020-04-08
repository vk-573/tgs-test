/**
 * myError.js
 *
 * A custom response.
*/
module.exports = function myError(error) {
  var res = this.res;

  // if my error is defined by mself then send it
  // otherwise send general error message
  if (error.isTgsError) {
    return res.status(error.statusCode).send(error.message);
  }
  return res.status(500).send('Internal Server Error');
};
