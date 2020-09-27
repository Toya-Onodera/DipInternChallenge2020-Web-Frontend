import React, {useState} from 'react'

// My Component
import Text from "../atoms/Text";
import FileInputBox from "../molecules/FileInputBox";
import SubmitButton from "../molecules/SubmitButton";

function UploadLayer() {
    const [csvState, setCsvState] = useState(null);

    const onSubmitButtonClick = async () => {
        if (csvState === null) {
            alert("アップロードする CSV ファイルを選択してください");
            return;
        }

        // console.log(csvState)
        const formData = new FormData();
        formData.append('data', csvState);

        const options = {
            method: 'POST',
            mode: 'no-cors',
            // responseType: 'blob',
            body: formData
        };

        const response = await fetch('https://dip-intern-challenge-api.herokuapp.com/api/v1/pred', options);
        // const response = await fetch('http://localhost:5000/api/v1/pred', options);
        // const reader = response.body.getReader();
        // const contentLength = +response.headers.get('Content-Length');
        // let receivedLength = 0; // その時点の長さ
        // let chunks = []; // 受信したバイナリチャンクの配列(本文を構成します)
        // while(true) {
        //     const {done, value} = await reader.read();
        //
        //     if (done) {
        //         break;
        //     }
        //
        //     chunks.push(value);
        //     receivedLength += value.length;
        //
        //     console.log(`Received ${receivedLength} of ${contentLength}`)
        // }

        console.log(response.status);

        const blob = await response.blob();
        console.log(blob);

        const link = document.createElement("a");

        if (link.download !== undefined) {
            const url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", `${String(Date.now())}.csv`);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        <div className="organisms-upload-layer">
            <div className="organisms-upload-layer-heading">
                <Text text="CSV Upload" size={28} />
                <Text text="Please upload the CSV file." />
            </div>

            <div className="organisms-upload-layer-file-input-box">
                <FileInputBox onChange={setCsvState} />
            </div>

            <div className="organisms-upload-layer-submit-button">
                <SubmitButton onClick={onSubmitButtonClick} />
            </div>
        </div>
    );
}

export default UploadLayer;
