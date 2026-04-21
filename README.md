# sp26-next-ssr - Server Side Rendering with Next.js and Google OAuth 2.0

## Setup
- Clone the repository.
- At google clod console, ensure your project has these origins and redirect URIs:
- Authorized JavaScript origins (where the login request will be originating from, in this case our Next server, since we are using SSR):
  ```
  http://localhost:3000
  ```
  - Authorized redirect URIs (the subroutine to take users through authentication)
  ```
  http://localhost:3000/auth/google/callback
  http://localhost:3000/api/auth/callback/google
  ```
- Create a new .env file at the base directory.
- Add the ClientID and Client Secret from your Google App credentials.
- Add your Neon connection string.
```
DATABASE_URL='NEON STRING'
clientID='clientIDFromGoogleCloud'
clientSecret='clientSecretFromGoogleCloud'
```
- Run `npm install`
- Run `npm run dev`
- Access the app at http://localhost:3000/products