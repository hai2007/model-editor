import { Component, ref } from 'nefbl'

import image3D from 'image3d'
import viewHandler from '@hai2007/browser/viewHandler.js'

import vertexShader from './shader-vertex.c'
import fragmentShader from './shader-fragment.c'

import doResize from '../tool/ResizeObserver'

import style from './index.scss'
import template from './index.html'

// 辅助网格数据
import boxModel from '../tool/box-model'
let boxModelData = boxModel()

let resizeFlag = 0
let doDraw

// 当前绘制的模型数据
let modelJSONs = []

@Component({
    selector: "app-root",
    template,
    styles: [style]
})
export default class {

    width: number
    height: number

    $setup() {
        return {
            width: ref(0),
            height: ref(0)
        }
    }

    $mounted() {
        let el = document.getElementById('canvas')

        doResize(el, () => {
            this.width = el.clientWidth
            this.height = el.clientHeight

            resizeFlag += 1

            setTimeout(() => {
                this.doit(resizeFlag)
            })
        })
    }

    resetEditor() {

        if (window.confirm('是否确定新建？')) {

            // 清除数据
            modelJSONs = []

            // 重新绘制
            resizeFlag += 1
            this.doit(resizeFlag)

        }

    }

    inputLocalFile(event) {

        let file = event.target.files[0]
        let reader = new FileReader()
        let isJSON

        reader.onload = () => {

            let modelJSON

            if (isJSON) {
                modelJSON = JSON.parse(<string>reader.result)

                // 后续再考虑使用需要借助indexedDB或别的缓存起来
                modelJSONs.push(modelJSON)

                // 重新绘制
                doDraw()

            } else {
                console.log(reader.result)
                alert('当前格式未支持（开发中），当前请选择JSON文件的模型~')
            }

        }

        // JSON字符串
        // （可能是Object3D.toJSON或者别的规范格式）
        if (/\.json$/.test(file.name)) {
            isJSON = true
            reader.readAsText(file)
        }

        // ASCII编码的或者二进制文件
        else {
            reader.readAsBinaryString(file)
        }

    }

    inputXhrFile() {
        alert('【XHR文件请求】功能未完成，开发中，敬请期待！')
    }

    exportFile() {
        alert('【导出】功能未完成，开发中，敬请期待！')
    }

    doit(_resizeFlag) {

        // 创建3D对象并配置好画布和着色器
        let image3d = new image3D(document.getElementsByTagName('canvas')[0], {
            "vertex-shader": vertexShader,
            "fragment-shader": fragmentShader,
            depth: true
        })

        let painter = image3d.Painter()
        let buffer = image3d.Buffer()
        let camera = image3d.Camera({
            size: 4,
            proof: true
        }).rotateBody(-0.4, 1, 0, 0)

        doDraw = () => {

            if (_resizeFlag != resizeFlag) return

            image3d.setUniformMatrix("u_matrix", camera.value())

            buffer.write(new Float32Array(boxModelData))
                .use('a_position', 3, 6, 0)
                .use('a_color', 3, 6, 3)

            painter.drawLine(0, boxModelData.length / 6)

            for (let modelJSON of modelJSONs) {

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

        }

        doDraw()

        // 每次调整的弧度
        let deg = 0.1
        let rateScale = 1

        viewHandler(data => {

            /*
             * 修改相机
             */

            // 键盘控制
            if (data.type == 'lookUp') {
                camera.rotateBody(deg, 1, 0, 0)
            } else if (data.type == 'lookDown') {
                camera.rotateBody(deg, -1, 0, 0)
            } else if (data.type == 'lookLeft') {
                camera.rotateBody(deg, 0, 1, 0)
            } else if (data.type == 'lookRight') {
                camera.rotateBody(deg, 0, -1, 0)
            }

            // 鼠标拖动或手指控制
            else if (data.type == 'rotate') {
                camera.rotateBody(deg * data.dist * 0.07, ...data.normal)
            }

            // 滚轮控制
            else if (data.type == 'scale') {

                // 设置一个缩放上界
                if (data.kind == 'enlarge' && rateScale >= 1.5) {
                    return
                }

                let baseTimes = 0.899

                let times = data.kind == 'enlarge' ? 2 - baseTimes : baseTimes
                rateScale *= times

                camera.scaleBody(times, times, times, 0, 0, 0)
            }

            // 重新绘制
            doDraw()
        })

    }

}
