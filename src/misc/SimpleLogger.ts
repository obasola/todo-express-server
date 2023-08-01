import Winston from 'winston';

class SimpleLogger {

    initializeLogging() : Winston.Logger {
        
        const logger = Winston.createLogger({
            level: 'info',
            format: Winston.format.json(),
        });
        if(process.env.NODE_ENV !== 'production') {
           logger.add(new Winston.transports.Console({
            format: Winston.format.simple(),
           }));
        }else{
            logger.add(
                new Winston.transports.File({
                    filename: 'error.log', level: 'error',
                }) 
            ),
            logger.add(
                new Winston.transports.File({
                    filename: 'combined.log',
                }),
            )
        }
        return logger;
    }

}

export default new SimpleLogger();