const parseEnv = () => {
    const arrToLog = Object.entries(process.env)
        .filter(([key, value]) => key.includes('RSS')).map((el) => el.join('=')).join('; ')
    console.log(arrToLog)
};

parseEnv();
