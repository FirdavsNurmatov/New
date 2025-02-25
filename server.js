import { config } from "./src/config/index.js"
import app from "./src/app.js"
import { logger } from "./src/utils/logger.js"



process.on('uncaughtException', (err) => {
    logger.error('Uncaught Exception', err)
    process.exit(1)
})

process.on("unhandledRejection", (reason, promise) => {
    logger.error('Unhandled Rejection at', promise, 'reason', reason)
    process.exit(1)
})
    

const bootstrap = async () => {
    try {
        app.listen(config.app.port, () => {
            logger.silly('Server is runnig on port  ' + config.app.port)
        })
    } catch (error) {
        logger.error(error.message)
    }
}

bootstrap()