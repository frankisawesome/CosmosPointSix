const url = '/api';

export function PostNew(message) {
    const body = JSON.stringify({
        "message": message,
        "userId": "thatoneguy"
    })
    return fetch(url+'/new', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: body
    })
}

export function GetMessages() {
    return fetch(url+'/get', {
        method: 'GET',
    })
}