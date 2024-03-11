const { spawnSync } = require('child_process');
const { readFile } = require('fs/promises');
const { appendFile, writeFile } = require('fs/promises');
const { join } = require('path');

async function main(schema: string) {
    
    // if(typeof schema == "object") {
    //     return ({
    //         valid: false,
    //         error: true,
    //         output: "Error: Not a valid JSON"
    //     })
    // }

    await writeFile(
        (`./schema.json`),
        JSON.stringify(schema),
        {
            encoding: 'utf-8',
            flag: 'w'
        },
    );

    const pythonProcess = await spawnSync('python3', [
        './validate1.py'
    ]);
    const output = await pythonProcess.stdout?.toString()?.trim();

    const status = (output === 'Success');
    if (status) {
        return ({
            valid: true,
            output
        })
    } else {
        return ({
            valid: false,
            error: true,
            output
        })
    }
}

const schema = {}

export default main;