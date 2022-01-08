import { Component, ref } from 'nefbl'

import image3D from 'image3d'

import vertexShader from './shader-vertex.c'
import fragmentShader from './shader-fragment.c'

import style from './index.scss'
import template from './index.html'

@Component({
    selector: "app-root",
    template,
    styles: [style]
})
export default class {

    size: number

    $setup() {
        return {
            size: ref(window.innerWidth > window.innerHeight - 30 ? window.innerHeight - 30 : window.innerWidth)
        }
    }

    $mounted() {
        setTimeout(() => {

            // 创建3D对象并配置好画布和着色器
            let image3d = new image3D(document.getElementsByTagName('canvas')[0], {
                "vertex-shader": vertexShader,
                "fragment-shader": fragmentShader,
                depth: true
            })

            let painter = image3d.Painter()
            // let buffer = image3d.Buffer()
            // let camera = image3d.Camera()

            image3d.setAttributeFloat("a_position", 0, 0, 0, 1)
            image3d.setUniformFloat("u_color", 0.8, 0.8, 0.8, 1)

            painter.drawPoint(0, 1);

        })
    }

}
