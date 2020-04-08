/**
 * myError.js
 *
 * A custom response.
*/
module.exports = function myError(error) {
  var res = this.res;

  // if my error is defined by mself then send it, otherwise send general error message
  console.log("error in my Error:", error);
  if (error.isTgsError) {
    console.log("my instance all good !");
    console.log("error:", error);
    return res.status(error.statusCode).send(error.message);
  }
  return res.status(500).send('Internal Server Error');
};
