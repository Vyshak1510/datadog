import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";
import ClientMonitor from "@sixthsense/sixthsense-javascript-agent";
import { datadogRum } from '@datadog/browser-rum';

ClientMonitor.register({
      service: "eComm-Angular", // Name the app
      collector: 'https://stg-http-collector-observability.sixthsense.rakuten.com/oap', // Provided by the Onboarding team
      pagePath: "index.html",
      serviceVersion: "1.2.1",
      enableSPA: true,
      useFmp: true,
      autoTracePerf: true,
      detailMode: true,
      environment: "prod",
      authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZWFtSWQiOiI5OTlkYTc0Ny04NmIyLTRkOTItYTRjNy0yYzZiNjkwMzM4ZGMiLCJiaWxsaW5nX2lkIjoiNWI2MDhhNWItMjZkZC00MGE5LWEwMjgtYjIwMzFmZTRiOWM5IiwiaWF0IjoxNjc0NjQ0Njg4LCJhdWQiOiJvYXAiLCJpc3MiOiJzaXh0aC1zZW5zLWF1dGgifQ.2UXHNnSIgY4-jECvyeNlATUpxNMA5RX9WfDLSdCoegY",
      enableDistributedTracing: true
    });
     
    
  ClientMonitor.setPerformance({
      service: "eComm-Angular",
      collector: 'https://stg-http-collector-observability.sixthsense.rakuten.com/oap',
      serviceVersion: "1.2.1",
      perfInterval: 1000,
      useFmp: true,
      authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZWFtSWQiOiI5OTlkYTc0Ny04NmIyLTRkOTItYTRjNy0yYzZiNjkwMzM4ZGMiLCJiaWxsaW5nX2lkIjoiNWI2MDhhNWItMjZkZC00MGE5LWEwMjgtYjIwMzFmZTRiOWM5IiwiaWF0IjoxNjc0NjQ0Njg4LCJhdWQiOiJvYXAiLCJpc3MiOiJzaXh0aC1zZW5zLWF1dGgifQ.2UXHNnSIgY4-jECvyeNlATUpxNMA5RX9WfDLSdCoegY"
     });

datadogRum.init({
    applicationId: 'f418a4a7-9e0f-4d71-b193-219cda3bd263',
    clientToken: 'pub24a25213142162b45c37cbc986cda15e',
    site: 'datadoghq.com',
    service:'sixthsense',
    env:'trial',
    // Specify a version number to identify the deployed version of your application in Datadog 
    // version: '1.0.0',
    sessionSampleRate: 100,
    sessionReplaySampleRate: 20,
    trackUserInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel:'mask-user-input'
});

datadogRum.startSessionReplayRecording();

    
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
