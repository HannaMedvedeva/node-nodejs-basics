const parseArgs = () => {
    const vars = process.argv.slice(2);
    console.log(vars.map((el, i, vars) => {
        if (i % 2 === 0) {
            return el.slice(2) + ' is ' + vars[i + 1];
        }
    }).filter(Boolean).join(', '))
};

parseArgs();
