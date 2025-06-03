
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://66d563db28e37ac33a79649c8e2df757@o4509418079977472.ingest.de.sentry.io/4509419043356752",
  
  tracesSampleRate: 1,

  debug: false,
});
