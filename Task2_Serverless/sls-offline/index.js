module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hello from UVCE MARVEL, this is serverless-offline.",
        input: event,
      },
      null,
      2
    ),
  };
};
