import React, { useState } from 'react'

/*interface propsType{
    result:true
}*/

export const useToastStatus = () => {
    const [toastStatus, setToastStatus] = useState<number>(0);

    const setByResult = (result: boolean | number) => {
        if (result == 0) {
            setToastStatus(0);
        }
        else if (result) {
            // window.alert("上传成功");
            setToastStatus(1);
        }
        else if (!result) {
            // window.alert("上传失败")
            setToastStatus(2);
        }
    }

    return [toastStatus, setByResult as any]//return any可行??
}