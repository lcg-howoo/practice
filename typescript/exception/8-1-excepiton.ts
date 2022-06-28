{

    function readFile(fileName: string): string {
        if (fileName === 'not exist') {
            throw new Error(`file not exist ${fileName}`)
        }
        return 'file contents';
    }

    function closeFile(fileName: string): void {
    }

    function run() {
        const fileName = 'not exist';
        try {
            console.log(readFile(fileName));
        } catch (e) {
            console.log('catched!!');
            return;
        }finally {
            console.log('finally is always excuted!')
            closeFile(fileName);
        }
        // closeFile(fileName);
        // console.log("closed");
    }
    run();
}
