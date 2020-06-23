// eslint-disable-next-line import/prefer-default-export

/**
 * REGEX FOR TOKEN
 * @const TOKEN
 */
export const TOKEN = /^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/;

/**
 * Headers for API REQUEST
 * @func header
 * @desc Headers options to pass at all the request API
 * @param {string} contentType
 * @returns object
 */
export const header = (contentType = 'application/x-www-form-urlencoded') => ({
  'content-type': contentType,
  'cache-control': 'no-cache',
  'authorization': TOKEN.test(document.cookie) ? document.cookie.replace('token=', 'token ') : ''
});

/** Domain API
 * @const API_URI
 */
export const API_URI = process.env.API_DOMAIN;
/**
 * KEY FOR DECODE JWT TOKEN
 * @const JWT_DECODE_KEY
 */
export const JWT_DECODE_KEY = process.env.KEY;


/**
 * DICO API CODE ERRORS
 * @const API_CODE_ERROR
 */
export const API_CODE_ERROR = {
  // Client-side error responses
  400: 'Bad Request',
  401: 'Unauthorized',
  402: 'Payment Required',
  403: 'Forbidden',
  404: 'Not Found',
  405: 'Method Not Allowed',
  406: 'Not Acceptable',
  407: 'Proxy Authentication Required',
  408: 'Request Timeout',
  409: 'Conflict',
  410: 'Gone',
  411: 'Length Required',
  412: 'Precondition Failed',
  413: 'Payload Too Large',
  414: 'URI Too Long',
  415: 'Unsupported Media Type',
  416: 'Requested Range Not Satisfiable',
  417: 'Expectation Failed',
  418: 'I\'m a teapot',
  422: 'Unprocessable Entity',
  426: 'Upgrade Required',
  428: 'Precondition Required',
  429: 'To Many Request',
  431: 'Request Header Fields Too Large',
  451: 'Unavailable For Legal Reasons',
  // Server-side error responses
  500: 'Internal Server Error',
  501: 'Not Implemented',
  502: 'Bad Gateway',
  503: 'Service Unavailable',
  504: 'Gateway Timeout',
  505: 'HTTP Version Not Supported',
  511: 'Network Authentication Required',
  520: 'Unknown Error',
  521: 'Web Server Is Down',
  522: 'Connection Timed Out',
  523: 'Origin Is Unreachable',
  524: 'A Timeout Occured',
  525: 'SSL Handshake Failed',
  526: 'Invalid SSL Certificate',
  527: 'Railgun Error'
};
