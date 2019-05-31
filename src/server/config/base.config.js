import { join } from "path";

const config = {
    buildDir: join(__dirname, "../", "webapp")
};

if (process.env.NODE_ENV === "development") {
    Object.assign(config, {
        port: 3000
    });
}

if (process.env.NODE_ENV === "production") {
    Object.assign(config, {
        port: 8090,
    });
}

export default config;