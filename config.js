const env = process.env;

export const nodeEnv = env.NODE_ENV || "development";

export const logStars = function(message) {
    console.info('**********');
    console.info(message);
    console.info('**********');
};

export default {
    mongoURI: "mongodb://dataTest:testdata@ds161148.mlab.com:61148/contest_db",
    port: env.PORT || 8080,
    host: env.HOST || "127.0.0.1",
    get serverUrl() {
        return `http://${this.host}:${this.port}`;
    }
};