const MONGO_USERNAME = process.env.MONGOUSER;
const MONGO_PASSWORD = process.env.MONGOPASS;
const MONGO_HOST = process.env.MONGOHOST;

const config = {
    port: 1337,
    saltWorkFactor: 10,
    accessTokenTtl: "15m",
    refreshTokenTtl: "1y",
    accessTokenPrivateKey: `-----BEGIN RSA PRIVATE KEY-----
MIICWwIBAAKBgGbDIU/2SmYnJyHVI/uqe1BgCdKd/g7m/0u+Dff2llaoJPfvzKEJ
MfLXW3my1/5MraVVmHruCn9HdoGYsynK1OvIvYMHXL0RHhhkAT4l6uZU2EWMoH5c
DAGeL3C9HBBw54CZxq4jwn5pRPlvMithDVMsZZWxEzDfBR88nUbdShplAgMBAAEC
gYAlCBJ8H1QmRdu7PHTQH1p613ESvi6srh+36tBb2DfLGKLh2j+SlJ60VVk4nPNr
R7SXzSW6vwd3YIhbIW0HFXnu3CgpNXc3oe2PuS6mPy5lWYKVpyBxzb0A2SYKwUxd
iASlJKJgJh1iPCJ/MHVUmZ7KVObZd72ZNQzcjPyfq5KXLQJBALkSGga4Nynx9FQI
IkZvH1gIA6j7D5BTw/gp/HHyIiLwqtLQv6xWakTJpC4TAkRJIutbDbQLwH9vf+lS
Vj31SUcCQQCOJXizzn484SJfys7etPjtRSlGiQieiAJEbBtW+kre+aFEU5EWo9hK
iu2CMoUC7mYLMtnHKocINI7A0I2cZBTzAkAKC254MOVllGlDalGZ6wwTdhPkxwOY
PMOlI3o9IPwzU0aiPIw6qVIJO7x6d7OmyyVnCsEapYykHgQeQMbHhBmfAkAuJGfM
JmnAJWzdH56LmL99dgfyB6WuoIPr5hPx5gnL28jHv0DH0qPxfqueqfuXef/R/s3G
4z02Iql8Wba+X5aVAkEAmd3lRvkK8krrpcihLLVjxAYUpM8dXCXp0X/t71Hhlzyz
0FaK2MduZsCqWuCZggdC+qeXoCPL7VHpYkiKgu7OuQ==
-----END RSA PRIVATE KEY-----`,
    accessTokenPublicKey: `-----BEGIN PUBLIC KEY-----
MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgGbDIU/2SmYnJyHVI/uqe1BgCdKd
/g7m/0u+Dff2llaoJPfvzKEJMfLXW3my1/5MraVVmHruCn9HdoGYsynK1OvIvYMH
XL0RHhhkAT4l6uZU2EWMoH5cDAGeL3C9HBBw54CZxq4jwn5pRPlvMithDVMsZZWx
EzDfBR88nUbdShplAgMBAAE=
-----END PUBLIC KEY-----`,
    refreshTokenPrivateKey: ``,
    refreshTokenPublicKey: ``,

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