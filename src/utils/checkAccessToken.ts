export default function checkAccessToken (accessToken: string): void {
    if(!accessToken) window.location.hash = '#/signin';

    return;
};