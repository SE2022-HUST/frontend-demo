function uploadFunc(url: string, file: File | undefined) : Response | undefined {
    let res: Response | undefined = undefined;
    if(file !== undefined) {
        const data = new FormData();
        data.append('file', file);
        let promise = fetch(url, {
                method: 'POST',
                body: data
            }).then(response => {
                res = response;
                console.log(res);
            }).catch(error => console.error(error))
    }
    else {
        console.error("No valid file loaded!"); 
    }
    return res;
}

export default uploadFunc;