export enum PostType {
  'completions', 'edits', 'images'
}
export const openApiPost = async (content: string, type:PostType) => {
  try {
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({content, type}),
    });

    const data = await response.json();
    if (response.status !== 200) {
      throw data.error || new Error(`Request failed with status ${response.status}`);
    }
    console.log('data', data)
  } catch (error) {
    // Consider implementing your own error handling logic here
    console.error(error)
    // alert(error.message);
  }
}
