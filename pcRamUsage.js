const os = require('os');

setInterval(() => {
    const { arch, platform, totalmem, freemem  } = os;
    const totalMemoryInMB = totalmem() / (1024 * 1024);
    const freeMemoryInMB = freemem() / (1024 * 1024);
    const usageRam = ( (totalMemoryInMB - freeMemoryInMB) / totalMemoryInMB) * 100;


    const stats = {
        OS: platform(),
        Arch: arch(), 
        Totalmem: `${parseInt(totalMemoryInMB)} MB`,
        Freemem: `${parseInt(freeMemoryInMB)} MB`,
        UsageRAM: `${usageRam.toFixed(2)}%`
    }

    console.clear();
    exports.stats = stats;

}, 1000)
