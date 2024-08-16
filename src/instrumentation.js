import { NodeSDK } from '@opentelemetry/sdk-node';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
import { PeriodicExportingMetricReader } from '@opentelemetry/sdk-metrics';
import { ConsoleMetricExporter } from '@opentelemetry/sdk-metrics-base';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';


const sdk = new NodeSDK({
  traceExporter: new OTLPTraceExporter({
  url: "http://10.150.238.177:4318/v1/traces", //göndermek istediğiniz uygulmanın ip adresi ve port numarasını buraya yazın
  serviceName: "nodeJSAPI",
}),
metricReader: new PeriodicExportingMetricReader({
  exporter: new ConsoleMetricExporter(),
}),
instrumentations: [getNodeAutoInstrumentations()],
});
sdk.start();

