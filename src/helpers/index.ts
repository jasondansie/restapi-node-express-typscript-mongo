import crypto from 'crypto';

const secret = "35j7++ddjrs?g(g%D3"
export const random = () => crypto.randomBytes(128).toString('base64');
export const authentication = (salt: string, password: string) => {
    return crypto.createHmac('sha256', [salt, password].join('/')).update(secret).digest('hex');
}