/**
 * @author ShenJiaLin<1053081983@qq.com>
 * @date 2020/04/03
 */
class Color {
    constructor (props) {
        this.red = 0
        this.green = 0
        this.blue = 0
        this.alpha = 1
        let type = typeof props
        if (type === 'string') {
            let colorCode = props.replace('#', '')
            if (colorCode.length === 3) {
                this.red = parseInt(colorCode[0] + colorCode[0], 16)
                this.green = parseInt(colorCode[1] + colorCode[1], 16)
                this.blue = parseInt(colorCode[2] + colorCode[2], 16)
            } else if (colorCode.length === 6) {
                this.red = parseInt(colorCode[0] + colorCode[1], 16)
                this.green = parseInt(colorCode[2] + colorCode[3], 16)
                this.blue = parseInt(colorCode[4] + colorCode[5], 16)
            } else {
                throw (new TypeError('Can\'t read proprety of incorrect form'))
            }
        } else if (type === 'object' && props instanceof Array) {
            this.red = Number(props[0])
            this.green = Number(props[1])
            this.blue = Number(props[2])
            if (props.length === 4) {
                this.alpha = Number(props[3])
            }
        }
    }
    toString () {
        let _red = this.red.toString(16)
        let _green = this.green.toString(16)
        let _blue = this.blue.toString(16)
        return `#${_red}${_green}${_blue}`
    }
    toGray () {
        let _gray = Number(((this.red * 0.3) + (this.green * 0.59) + (this.blue * 0.11)).toFixed(0)).toString(16)
        return `#${_gray}${_gray}${_gray}`
    }
    toLightGray () {
        let _gray = Number(((this.red * 0.3) + (this.green * 0.59) + (this.blue * 0.11)).toFixed(0)).toString(16)
        let maxColor = Math.max(Number(this.red), Number(this.green), Number(this.blue))
        if (this.red === maxColor) {
            return `#${this.red.toString(16)}${_gray}${_gray}`
        } else if (this.green === maxColor) {
            return `#${_gray}${this.green.toString(16)}${_gray}`
        } else if (this.blue === maxColor) {
            return `#${_gray}${_gray}${this.green.toString(16)}`
        } else {
            return `#${_gray}${_gray}${_gray}`
        }
    }
    toRGBString () {
        return `rgb(${this.red},${this.green},${this.blue})`
    }
    toRGBAString () {
        return `rgb(${this.red},${this.green},${this.blue}),${this.alpha}`
    }
}
export default Color
