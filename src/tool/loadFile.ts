export default files => {

    return new Promise((resolve, reject) => {

        let _promises = []

        for (let file of files) {

            let _promise = new Promise((resolve, reject) => {
                let reader = new FileReader()

                reader.onload = () => {

                    // 如果是JSON文件，说明是之前解析好的
                    if (/\.json$/.test(file.name)) {

                        // 后续这里的json可能会统一格式，会进行统一的格式处理
                        // 当前积累的案例不足，无法设计出一个比较好的统一的格式
                        // 不过，具体的也看情况再说
                        resolve(JSON.parse(<string>reader.result))
                    }

                    // 其它，说明还没有完成解析
                    else {
                        console.log(reader.result)
                        reject('当前文件(' + file.name + ')对应的格式开发未完成，敬请期待~')
                    }

                }

                // ASCII编码的文本文件或二进制文件
                // 准备支持的格式
                if (/\.(json|mtl|obj)$/.test(file.name)) {
                    reader.readAsBinaryString(file)
                }

                // 如果选择的文件，还没有被计划进行支持
                else {
                    reject('当前文件(' + file.name + ')对应的格式未支持，如果你需要使用，可以联系我们： https://github.com/hai2007/model-editor/issues')
                }

            })

            _promises.push(_promise)

        }

        Promise.all(_promises).then(result => {

            resolve(result)

        }).catch(e => {

            reject(e)

        })

    })

}
