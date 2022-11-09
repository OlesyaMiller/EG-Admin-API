import {registerAs} from "@nestjs/config";

export default registerAs('database', () => {
    return {
        type: "postgres",
        logging: true,
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        schema: process.env.DB_SCHEMA,
        autoLoadEntities: true,
        synchronize: process.env.DB_SYNC.toLowerCase() === 'true',
        entities: ["src/**/*.entity.js"],
        migrations: ['src/migrations/*{.ts,.js}'],
        cli: {
            migrationsDir: 'src/migrations'
        },
    }
})
