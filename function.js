function response(status, message, data = null) {
  return { status, message, data, timeStamp: new Date().getTime() };
}

module.exports = { response };
