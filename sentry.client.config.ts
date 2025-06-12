import * as Sentry from "@sentry/nextjs";

Sentry.init({
    dsn: "https://66d563db28e37ac33a79649c8e2df757@o4509418079977472.ingest.de.sentry.io/4509419043356752",
    // integrations: [
    //     Sentry.replayIntegration(),
    //     Sentry.feedbackIntegration({
    //         colorScheme: "system",
    //     }),
    // ],
    tracesSampleRate: 1,
    // replaysSessionSampleRate: 0.1,
    // replaysOnErrorSampleRate: 1.0,
    debug: false,
});