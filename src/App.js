import * as React from 'react'
import GoodEditor from './goodEditor'

const { Fragment } = React

export default class App extends React.Component {
  state = {}

  render() {
    return (
      <Fragment>
        <GoodEditor placeholder="这里输入文字富文本内容" />
      </Fragment>
    )
  }
}
