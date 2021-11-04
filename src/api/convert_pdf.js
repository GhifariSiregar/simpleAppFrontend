import axios from "axios";

const URL = process.env.REACT_APP_API_URL;

export class ConvertPdf {
    convert(payload) {
        return new Promise(async (resolve, reject) => {
            await axios.post(URL + 'convert-to-pdf', payload, { responseType: "arraybuffer" })
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
}

export const convertPdf = new ConvertPdf();