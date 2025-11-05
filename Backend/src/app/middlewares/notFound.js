import status from 'http-status'

const notFound = (req, res, next) => {
  res.status(status.INTERNAL_SERVER_ERROR).json({
    success: false,
    messsage: 'API NOT FOUND',
    error: `The requested URL ${req.originalUrl} with method ${req.method} does not exist--😢😥`,
  })
}

export default notFound
