import { connect } from "react-redux"
import Component from '../components/App'
import { changeAction } from '../actions/example'

export default connect(({ example }) => ({
    on: example.on,
}), {
    changeAction,
})(Component)
