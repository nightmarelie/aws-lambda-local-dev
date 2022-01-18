exports.handler = async function (event) {
  let statusCode;
  let body;

  try {
    // "body" will come from API Gateway as plain text
    const { word } = JSON.parse(event.body);

    statusCode = 200;
    body = {
      upperCaseWord: word.toUpperCase(),
    };
  } catch (err) {
    statusCode = 400;
  }

  // Return object required by API Gateway
  return {
    statusCode,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify(body),
  };
};
