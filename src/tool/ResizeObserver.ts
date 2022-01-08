let _support_ = true

export default function (el, doback) {

    let observer = null

    try {

        let _hadWilldo_ = false
        let _hadNouse_ = false
        observer = new ResizeObserver(function () {

            // 如果前置任务都完成了
            if (!_hadWilldo_) {
                _hadWilldo_ = true

                // 既然前置任务已经没有了，那么就可以更新了？
                // 不是的，可能非常短的时间里，后续有改变
                // 因此延迟一点点来看看后续有没有改变
                // 如果改变了，就再延迟看看
                let interval = window.setInterval(function () {

                    // 判断当前是否可以立刻更新
                    if (!_hadNouse_) {
                        window.clearInterval(interval)

                        _hadWilldo_ = false
                        doback()

                    }

                    _hadNouse_ = false
                }, 100)

            } else {
                _hadNouse_ = true
            }

        })
        observer.observe(el)

    } catch (e) {

        // 如果浏览器不支持此接口

        if (_support_) {
            console.error('ResizeObserver undefined!')

            // 不支持的话，提示一次就可以了
            _support_ = false
        }

    }

    return function () {
        if (observer) {

            // 解除对画布大小改变的监听
            observer.disconnect()

        }
    }

}
