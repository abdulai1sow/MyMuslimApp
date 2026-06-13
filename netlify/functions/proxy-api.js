exports.handler = async (event) => {
  const url = decodeURIComponent(event.queryStringParameters.url || '');
  
  if (!url) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'URL parameter is required' })
    };
  }

  console.log('Proxy request for:', url);

  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'MyMuslimApp (https://github.com/abdulai1sow/MyMuslimApp)',
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      console.error(`API returned status ${response.status}`);
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: `API error: ${response.status}` })
      };
    }

    const contentType = response.headers.get('content-type');
    let data;

    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      data = await response.text();
    }

    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    };
  } catch (error) {
    console.error('Proxy error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Failed to fetch data',
        details: error.message 
      })
    };
  }
};

