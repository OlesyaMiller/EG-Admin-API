"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const db_config_1 = require("./src/config/db.config");
config_1.ConfigModule.forRoot({
    isGlobal: true,
    load: [db_config_1.default],
});
exports.default = (0, db_config_1.default)();
//# sourceMappingURL=ormconfig.js.map