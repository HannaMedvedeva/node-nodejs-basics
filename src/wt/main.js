import { Worker } from 'worker_threads'
import { cpus } from 'os'

const CPU_CORES_COUNT = cpus().length

const performCalculations = async () => {
    const promises = []

    for (let i = 0; i < CPU_CORES_COUNT; i++) {
        promises.push(new Promise(function (resolve, reject) {

            const worker = new Worker("./src/wt/worker.js", {
                workerData: { n: 10 + i },
            });

            worker.on("message", (data) => {
                resolve(data);
            });
            worker.on("error", (msg) => {
                reject(`An error ocurred: ${msg}`);
            });
        }))
    }

    const promisesResult = await Promise.allSettled(promises)
    const result = promisesResult.map(({ status, value }) => {
        const workerStatus = status === 'fulfilled' ? 'resolved' : 'error'
        const workerData = status === 'fulfilled' ? value : null

        return { status: workerStatus, data: workerData }
    })
    console.log(result)
};

await performCalculations();
