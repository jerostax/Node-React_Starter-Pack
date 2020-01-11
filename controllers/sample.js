// *
// *
// * * * Here you can find a sample of a controller file
// *
// *

exports.getSample = (req, res, next) => {
  res.status(200).json({
    message: 'Sample successfully fetched',
    content: 'Hello World!'
  });
};
