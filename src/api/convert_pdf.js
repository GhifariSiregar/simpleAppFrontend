import axios from "axios";

const URL = 'http://localhost:3496/';

export class ConvertPdf {
    convert(payload) {
        return new Promise(async (resolve, reject) => {
            await axios.post(URL + 'spfp/upsert', payload, { responseType: "arraybuffer" })
                .then(function(result) {
                    console.log(result)
                    const arrayBuffer = new Uint8Array(result.data);
                    const result2 = new Blob([arrayBuffer], { type: "application/pdf" });
                    const fileURL = window.URL.createObjectURL(result2);
                    window.open(fileURL);
                })
                .catch(function(err) {
                    alert(err.response.data);
                    reject(err);
                })
        })
    }
    get() {
        return new Promise(async (resolve, reject) => {
            await axios.get(URL + 'spfp/get/2d885b10-21de-11ec-8124-c7ef1b94c6a1')
            .then(function(result) {
                resolve(unescape(result.data.content).replace(/[\r\n\t]/g, ""));
            })
            .catch(function(err) {
                alert(err.response.data);
                reject(err);
            })
        })
    }
}

export const convertPdf = new ConvertPdf();