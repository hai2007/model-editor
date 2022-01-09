export default () => {

    let colors = [
        [0.5, 0.5, 0.5],
        [0.8, 0.8, 0.8]
    ]

    let modelData = []

    let pushColor = (i) => {
        let color = i % 5 == 0 ? colors[0] : colors[1]
        modelData.push(color[0])
        modelData.push(color[1])
        modelData.push(color[2])
    }

    for (let i = 0; i <= 25; i++) {

        // 横

        // [-1,0,-1+(2/25)*i]
        modelData.push(-1)
        modelData.push(0)
        modelData.push(0.08 * i - 1)
        pushColor(i)

        modelData.push(1)
        modelData.push(0)
        modelData.push(0.08 * i - 1)
        pushColor(i)


        // 竖

        modelData.push(0.08 * i - 1)
        modelData.push(0)
        modelData.push(-1)
        pushColor(i)

        modelData.push(0.08 * i - 1)
        modelData.push(0)
        modelData.push(1)
        pushColor(i)

    }

    return modelData
}
