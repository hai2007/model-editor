export default (modelJSON, painter, buffer) => {

    // Object3D.toJSON
    if (modelJSON.metadata.type == "Object" && modelJSON.metadata.generator == "Object3D.toJSON") {

        for (let geometrie of modelJSON.geometries) {

            let position = geometrie.data.attributes.position.array

            let data = []
            for (let i = 0; i < position.length; i += 3) {

                // 点的坐标
                data.push(position[i])
                data.push(position[i + 1])
                data.push(position[i + 2])

                // 点的颜色
                data.push(0)
                data.push(0)
                data.push(0)

            }

            // 写入顶点数据
            buffer
                .write(new Float32Array(data))
                .use('a_position', 3, 6, 0)
                .use('a_color', 3, 6, 3)

            painter.drawTriangle(0, position.length / 3)

        }

    }

    // 不支持的格式
    else {
        alert('非常抱歉，当前选择的JSON的内容格式不支持！')
    }

}
