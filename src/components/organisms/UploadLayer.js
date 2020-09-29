import React, {useState} from 'react'

// My Component
import Text from "../atoms/Text";
import FileInputBox from "../molecules/FileInputBox";
import SubmitButton from "../molecules/SubmitButton";
import Loading from "../molecules/Loading";

function UploadLayer() {
    const [csvState, setCsvState] = useState(null);
    const [isResponseState, setIsResponseState] = useState(false);

    const onSubmitButtonClick = async () => {
        if (csvState === null) {
            alert("アップロードする CSV ファイルを選択してください");
            return;
        }

        setIsResponseState(true);

        const formData = new FormData();
        formData.append('data', csvState);

        const options = {
            method: 'POST',
            body: formData
        };

        const response = await fetch('https://dip-intern-challenge-api.herokuapp.com/api/v1/pred', options);
        const blob = await response.blob();

        setIsResponseState(false);

        // CSV ファイル自動ダウンロード
        const link = document.createElement('a');

        if (link.download !== undefined) {
            const url = URL.createObjectURL(blob);
            link.setAttribute('href', url);
            link.setAttribute('download', `${String(Date.now())}.csv`);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    const LoadingView = (isResponseState) ? <Loading /> : null;

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

            {LoadingView}
        </div>
    );
}

export default UploadLayer;
