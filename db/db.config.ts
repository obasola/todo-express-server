export const config = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Password2023!",
    DB: "MyChores",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

export const dialect = "mysql"