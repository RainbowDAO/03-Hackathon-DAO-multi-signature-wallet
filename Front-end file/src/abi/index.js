import Creator from "./data/Creator.json"
import MultiSign from "./data/MultiSign.json"

const CONTRACTS = {
    Creator:{address:"0xF0b4F15495AE189A1F9e1210861aD47f18aD188f",abi:Creator},
    MultiSign:{abi:MultiSign},
};

function getContractByName(name, web3) {
    return new web3.eth.Contract(CONTRACTS[name].abi, CONTRACTS[name].address, {});
}

function getContractByToken(name, address, web3) {
    return new web3.eth.Contract(CONTRACTS[name].abi, address, {});
}

function getContractAddress(name) {
    return CONTRACTS[name].address;
}

export default {
    CONTRACTS,
    getContractByName,
    getContractByToken,
    getContractAddress
};
