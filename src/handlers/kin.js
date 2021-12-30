async function hello(event, context) {
    return {
      statusCode: 200,
      body: JSON.stringify({ event }),
    };
  }
  
export const handler = hello;