function errorMiddleware(err, req, res, next) {
  // Handle the error here
  console.error(err);

  // Set the appropriate status code
  res.status(500);

  // Send a JSON response with the error message
  res.json({ error: err.message });
}

module.exports = errorMiddleware;
