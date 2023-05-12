import PropTypes from "prop-types"
import { useState } from "react"
import Image_erro from "./Image-Error/img-error.png"
const Image = (({ src, alt, failImage = Image_erro, ...pros }) => {

    const [errorss, setError] = useState("")
    const handlErrorImage = () => {
        setError(failImage)
    }
    return (
        <img src={errorss || src} {...pros} onError={handlErrorImage} alt={alt} />
    )

})
Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    failImage: PropTypes.string


}
export default Image