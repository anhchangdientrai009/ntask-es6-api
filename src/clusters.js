import cluster from "cluster";
import os from "os";

const CPUS = os.cpus();
if(cluster.isMaster) {
    CPUS.forEach(() => {
        cluster.fork();
    })
    cluster.on("listening", (worker) => {
        console.log("Cluster %d connected", worker.process.pid);
    });
    cluster.on("disconnect", (worker) => {
        console.log("Cluster %d disconnected", worker.process.pid);
    });
    cluster.on("exist", (worker) => {
        console.log("Cluster %d dead", worker.process.pid);
    });
} else {
    require("./index.js")
}
