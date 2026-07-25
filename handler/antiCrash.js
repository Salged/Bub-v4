module.exports = (client) => {
    // Необработанные отклонения Promise
    process.on('unhandledRejection', (reason, promise) => {
        console.error('❌ [antiCrash] Unhandled Rejection:');
        console.error(reason);
        if (promise) console.error(promise);
    });

    // Непойманные исключения
    process.on('uncaughtException', (error, origin) => {
        console.error('❌ [antiCrash] Uncaught Exception:');
        console.error(error);
        console.error('Origin:', origin);
        // Не выключаем бота, а просто логируем
    });

    // Монитор непойманных исключений (Node.js 16+)
    process.on('uncaughtExceptionMonitor', (error, origin) => {
        console.error('❌ [antiCrash] Uncaught Exception Monitor:');
        console.error(error);
        console.error('Origin:', origin);
    });

    // Множественные разрешения Promise
    process.on('multipleResolves', (type, promise, reason) => {
        console.warn('⚠️ [antiCrash] Multiple Resolves:');
        console.warn('Type:', type);
        console.warn('Reason:', reason);
        console.warn('Promise:', promise);
    });

    // Завершение процесса (для отладки)
    process.on('exit', (code) => {
        console.log(`🛑 [antiCrash] Process exited with code: ${code}`);
    });

    console.log('✅ [antiCrash] Защита включена!');
};
