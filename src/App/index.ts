import { Component, ref } from 'nefbl'

import image3D from 'image3d'

import vertexShader from './shader-vertex.c'
import fragmentShader from './shader-fragment.c'

import doResize from '../tool/ResizeObserver'

import style from './index.scss'
import template from './index.html'

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

            setTimeout(() => {
                this.doit()
            })
        })
    }

    doit() {

        // 创建3D对象并配置好画布和着色器
        let image3d = new image3D(document.getElementsByTagName('canvas')[0], {
            "vertex-shader": vertexShader,
            "fragment-shader": fragmentShader,
            depth: true
        })

        let painter = image3d.Painter()
        let buffer = image3d.Buffer()
        let camera = image3d.Camera({
            size: 2,
            proof: true
        })

        image3d.setAttributeFloat("a_position", 0, 0, 0)
        image3d.setUniformFloat("u_color", 0.8, 0.8, 0.8, 1)

        painter.drawPoint(0, 1);
    }

}
