import propTypes from "prop-types"
import "./GlobalStyle.scss"
const GlobalStyles = ({ children }) => {
    return children
}
GlobalStyles.propTypes = {
    children: propTypes.node.isRequired
}
export default GlobalStyles