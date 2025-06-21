declare namespace NodeJS {
  interface ProcessEnv {
    /** database url */
    readonly DATABASE_URL: string;

    /** nookipedia api key */
    readonly NOOKIPEDIA_API_KEY: string;
  }
}
