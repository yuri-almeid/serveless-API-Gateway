async function hello(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: context }),
  };
}

export const handler = hello;


