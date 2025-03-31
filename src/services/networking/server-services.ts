import { ENVConfig } from '@/config/env';

type FetchInput = RequestInfo | URL;
type FetchOptions = RequestInit & { baseUrl?: string };

export async function serviceServices(input: FetchInput, options: FetchOptions = {}) {
  const { baseUrl = ENVConfig.API_URL || '', headers, ...restOptions } = options;

  const fullUrl =
    typeof input === 'string' && !input.startsWith('http') ? `${baseUrl}${input}` : input;

  const mergedHeaders = {
    'Content-Type': 'application/json',
    ...headers
  };

  const config: RequestInit = {
    ...restOptions,
    headers: mergedHeaders
  };

  return fetch(fullUrl, config);
}
