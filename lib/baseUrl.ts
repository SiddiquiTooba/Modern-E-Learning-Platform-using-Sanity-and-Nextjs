const baseUrl =
  process.env.NODE_ENV === "production"
/*If the app is in production, use the production URL
*Else, use the development URL
*/
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : `${process.env.NEXT_PUBLIC_BASE_URL}`;

export default baseUrl;
