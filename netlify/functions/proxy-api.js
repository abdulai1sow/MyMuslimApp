exports.handler = async (event) => {
  const url = decodeURIComponent(event.queryStringParameters?.url || '');
  
  console.log('Proxy handler called with URL:', url);

  if (!url) {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'URL parameter is required' })
    };
  }

  try {
    console.log('Fetching from:', url);
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'MyMuslimApp/1.0'
      }
    });

    console.log('Response status:', response.status);

    if (!response.ok) {
      return {
        statusCode: response.status,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: `API returned ${response.status}` })
      };
    }

    const data = await response.json();
    console.log('Success! Returning data');

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-cache'
      },
      body: JSON.stringify(data)
    };
  } catch (error) {
    console.error('Proxy error:', error.message, error.stack);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        error: 'Proxy failed',
        message: error.message
      })
    };
  }
};


