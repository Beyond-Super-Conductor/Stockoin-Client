import crypto from 'crypto';


export function base64UrlFromBase64(str: string) {
  return str.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}

// create JWT Token
export async function sign(payload: any, secretKey: string) {
  const header = {
    alg: 'HS256',
    typ: 'JWT'
  };
  const encodedHeader = base64UrlFromBase64(Buffer.from(JSON.stringify(header)).toString('base64'));
  const encodedPayload = base64UrlFromBase64(
    Buffer.from(JSON.stringify(payload)).toString('base64')
  );
  
   const signature = base64UrlFromBase64(
    crypto.createHmac('sha256', secretKey)
    .update(encodedHeader + '.' + encodedPayload)
    .digest('base64')
  );
    
  
    
  return `${encodedHeader}.${encodedPayload}.${signature}`;
}