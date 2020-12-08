import { RespondHttpFn } from '../utilities';

/**
 * Arguments which listeners and middleware receive to process a hermes http event Slack.
 *
 * The type parameter `Http` represents the entire JSON-encoded request body from Slack.
 */
export interface SlackHttpMiddlewareArgs {
  payload: Http;
  respond: RespondHttpFn;
}

/**
 * A Slack hermes http request wrapped in the standard metadata.
 *
 * This describes the entire JSON-encoded body of a request from Slack hermes http requests.
 */
export interface Http {
  type: 'http';
  method: string;
  path: string;
  headers: object;
  body: string;
}