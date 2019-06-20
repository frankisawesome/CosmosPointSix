const url = 'https://threepointsix.azurewebsites.net/api/post';

export function PostNew(message) {
    const body = JSON.stringify({
        "Message": message,
        "Authors": ["thatoneguy"]
    })
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: body
    })
}

export function GetMessages() {
    return fetch(url, {
        method: 'GET',
    })
}