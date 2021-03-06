const MONGO_USERNAME = process.env.MONGOUSER || 'socialAppTest';
const MONGO_PASSWORD = process.env.MONGOPASS || '**supersecretpassword';
const MONGO_HOST = process.env.MONGOHOST || 'cluster0.t3b3h.mongodb.net/Users?retryWrites=true&w=majority';

const config = {
    port: 1337,
    saltWorkFactor: 10,
    accessTokenTtl: "15m",
    refreshTokenTtl: "1y",
    accessTokenPrivateKey: `LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQpNSUlDWFFJQkFBS0JnUUNwbERXMmo1ZkI4
Qk5KZ2lMcjJRQjJCVFY1REtoQ1p1b0Y0Ry9rWUJ2Q3lpU2NVTnFpCnVyVDJoK21Vb0RlVDQzZjNR
TzNnNDdJQmR4SWFBWHdweGd6RC82TGt4b1VyTTBKdHFpQUp5U2lqRXhrcGgydnAKcjF0NSs2eTg1
U2g4OTVCRGtyRXBqazkxQkt5UWV4ZTlZVmdMWlp4blZJalZ2K2VhMHhXaUIvUHIvUUlEQVFBQgpB
b0dCQUtaamRoQ2E5QnltbzBZTkdwYXZaWFJueC8vdUcycUw4RE96OUJYdzkwdzVhNUsxQXRHSXdP
YmtsSnZ3CldKZ1RLVExCMHFaR3cvSU1Fd2JSVGpMdTBMWWdHUStFNFBXdTVBTmdFS2ZscTJNcm9M
SkNnakw4VE1VYzd1V1QKU0NtVlptVCtYNkRWQkV6VmtEQmxDOFc3Q1phVHJ4a05FMDFBbEgzbm1v
ZkpaOUlCQWtFQSthbUZXYVdLNWdPcQp1Q3FXbUttclk5TkdFZndVcnVGOVB5YThlTTZQYjd3RFFD
c1o4T1RQQUJoa3J2R2xGb3hENXBUdEt4MFlZZEt1ClBHUDhrV2dubVFKQkFLM2lRSXBNd3ZRb1ZM
dDdQeCthWXN1NitRb1d3dHFrSmpxQVFrY1k1NzVxKzFHdFhZL2sKYmo1TTd3SmUzcjhMNm9wb2tL
bUg2cVFVQ2RkZ2Y0d2tGZ1VDUUZnUVdNNUhXMWhKSU5YM2g4bHZ4OW5kYzFEeQp0eVQ4dXQ0a3Zz
UnFNQ1E4a0hUNC94eCt5Um1DZ1RsSVdYQTdwOVBVNGxlYjJyYmV4c0Rja0FHR1dMa0NRRmxRCnNQ
UVk3NzY0QktYMGJYMFBNUllTcVI4TWgvUUVndnBqclNlVjNGdUwyaUdmR2tMeUE4cU9lK3BNenI5
MUlIa04Kc3RqUnpxMk8rV3NlendVdDkvMENRUUN4YWhTTXRFL3NlVUNTM2M5Ym1lYlJ5anhNUXBU
TFJob0lSYUFBRE4yQgphcjJ1VldDYm4veGgzV0lUSnVsMHJiTWlRYkc1bmJPU2dsS2V3cE5vRUha
awotLS0tLUVORCBSU0EgUFJJVkFURSBLRVktLS0tLQ==`,
    accessTokenPublicKey: `LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUlHZk1BMEdDU3FHU0liM0RRRUJBUVVBQTRHTkFE
Q0JpUUtCZ1FDcGxEVzJqNWZCOEJOSmdpTHIyUUIyQlRWNQpES2hDWnVvRjRHL2tZQnZDeWlTY1VO
cWl1clQyaCttVW9EZVQ0M2YzUU8zZzQ3SUJkeElhQVh3cHhnekQvNkxrCnhvVXJNMEp0cWlBSnlT
aWpFeGtwaDJ2cHIxdDUrNnk4NVNoODk1QkRrckVwams5MUJLeVFleGU5WVZnTFpaeG4KVklqVnYr
ZWEweFdpQi9Qci9RSURBUUFCCi0tLS0tRU5EIFBVQkxJQyBLRVktLS0tLQ==`,
    refreshTokenPrivateKey: `LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQpNSUlDWFFJQkFBS0JnUUNwbERXMmo1ZkI4
Qk5KZ2lMcjJRQjJCVFY1REtoQ1p1b0Y0Ry9rWUJ2Q3lpU2NVTnFpCnVyVDJoK21Vb0RlVDQzZjNR
TzNnNDdJQmR4SWFBWHdweGd6RC82TGt4b1VyTTBKdHFpQUp5U2lqRXhrcGgydnAKcjF0NSs2eTg1
U2g4OTVCRGtyRXBqazkxQkt5UWV4ZTlZVmdMWlp4blZJalZ2K2VhMHhXaUIvUHIvUUlEQVFBQgpB
b0dCQUtaamRoQ2E5QnltbzBZTkdwYXZaWFJueC8vdUcycUw4RE96OUJYdzkwdzVhNUsxQXRHSXdP
YmtsSnZ3CldKZ1RLVExCMHFaR3cvSU1Fd2JSVGpMdTBMWWdHUStFNFBXdTVBTmdFS2ZscTJNcm9M
SkNnakw4VE1VYzd1V1QKU0NtVlptVCtYNkRWQkV6VmtEQmxDOFc3Q1phVHJ4a05FMDFBbEgzbm1v
ZkpaOUlCQWtFQSthbUZXYVdLNWdPcQp1Q3FXbUttclk5TkdFZndVcnVGOVB5YThlTTZQYjd3RFFD
c1o4T1RQQUJoa3J2R2xGb3hENXBUdEt4MFlZZEt1ClBHUDhrV2dubVFKQkFLM2lRSXBNd3ZRb1ZM
dDdQeCthWXN1NitRb1d3dHFrSmpxQVFrY1k1NzVxKzFHdFhZL2sKYmo1TTd3SmUzcjhMNm9wb2tL
bUg2cVFVQ2RkZ2Y0d2tGZ1VDUUZnUVdNNUhXMWhKSU5YM2g4bHZ4OW5kYzFEeQp0eVQ4dXQ0a3Zz
UnFNQ1E4a0hUNC94eCt5Um1DZ1RsSVdYQTdwOVBVNGxlYjJyYmV4c0Rja0FHR1dMa0NRRmxRCnNQ
UVk3NzY0QktYMGJYMFBNUllTcVI4TWgvUUVndnBqclNlVjNGdUwyaUdmR2tMeUE4cU9lK3BNenI5
MUlIa04Kc3RqUnpxMk8rV3NlendVdDkvMENRUUN4YWhTTXRFL3NlVUNTM2M5Ym1lYlJ5anhNUXBU
TFJob0lSYUFBRE4yQgphcjJ1VldDYm4veGgzV0lUSnVsMHJiTWlRYkc1bmJPU2dsS2V3cE5vRUha
awotLS0tLUVORCBSU0EgUFJJVkFURSBLRVktLS0tLQ==`,
    refreshTokenPublicKey: `LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUlHZk1BMEdDU3FHU0liM0RRRUJBUVVBQTRHTkFE
Q0JpUUtCZ1FDcGxEVzJqNWZCOEJOSmdpTHIyUUIyQlRWNQpES2hDWnVvRjRHL2tZQnZDeWlTY1VO
cWl1clQyaCttVW9EZVQ0M2YzUU8zZzQ3SUJkeElhQVh3cHhnekQvNkxrCnhvVXJNMEp0cWlBSnlT
aWpFeGtwaDJ2cHIxdDUrNnk4NVNoODk1QkRrckVwams5MUJLeVFleGU5WVZnTFpaeG4KVklqVnYr
ZWEweFdpQi9Qci9RSURBUUFCCi0tLS0tRU5EIFBVQkxJQyBLRVktLS0tLQ==`,

    MONGO:{
        host: MONGO_HOST,
        username: MONGO_USERNAME,
        password: MONGO_PASSWORD,
        options: {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            socketTimeoutMS: 30000,
            keepAlive: true,
            autoIndex: false,
            retryWrites: true
        },
        url: `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}`
    },
}

export default config;