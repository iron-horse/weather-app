/***
 *
 * Unfortunately, keeping any key in your React client, even if you are using gitignore and an .env file, is not secure. 
 * 
You should really only save API keys or secrets in your backend such as Node.js or Express.js. You can have your client send a request to your backend API, which can then make the actual API call with the API key and send the data back to your client.
 */

export const openWeatherAPIKey="3759457de4bc1d058221e56fb3caca87";