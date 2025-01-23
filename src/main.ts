import {getInput} from "@actions/core";
function run() {
    const inputName = getInput("name")
    console.log("Running input: " + inputName)
}

run();