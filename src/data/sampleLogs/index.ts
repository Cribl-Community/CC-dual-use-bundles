import { cloudInfraLogs } from './cloud-infra';
import { endpointLogs } from './endpoint';

export const sampleLogSets: Record<string, string> = {
  ...cloudInfraLogs,
  ...endpointLogs,
};
