exports.handler = async (event) => {
  const url = decodeURIComponent(event.queryStringParameters.url || '');
  
  if (!url) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'URL parameter is required' })
    };
  }

  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'MyMuslimApp (https://github.com/abdulai1sow/MyMuslimApp)'
      }
    });

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    };
  } catch (error) {
    console.error('Proxy error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch data' })
    };
  }
};
