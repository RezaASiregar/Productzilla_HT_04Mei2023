const fs = require('fs');
const path = require('path');

function store(namaFile, data){
    const exists = fs.existsSync(path.join(__dirname, namaFile + '.json'));
    if (!exists){
        fs.writeFileSync(
            path.join(__dirname, namaFile + '.json'),
            JSON.stringify([data])
        );
    } else {
        const existingData = getAll(namaFile);
        let dataBaru = existingData;
        dataBaru.push(data);
        dataBaru = JSON.stringify(dataBaru);
        fs.writeFileSync(path.join(__dirname, namaFile + '.json'), dataBaru);
    }
}

function getAll(namaFile){
    const data = fs.readFileSync(path.join(__dirname, namaFile + '.json'));
    if (data){
        return JSON.parse(data.toString('utf-8'));
    }
    return undefined
}

module.exports = {
    store,
    getAll,
}