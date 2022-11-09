declare const _default: (() => {
    type: string;
    logging: boolean;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    schema: string;
    autoLoadEntities: boolean;
    synchronize: boolean;
    entities: string[];
    migrations: string[];
    cli: {
        migrationsDir: string;
    };
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    type: string;
    logging: boolean;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    schema: string;
    autoLoadEntities: boolean;
    synchronize: boolean;
    entities: string[];
    migrations: string[];
    cli: {
        migrationsDir: string;
    };
}>;
export default _default;
