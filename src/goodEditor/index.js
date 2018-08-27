import React from 'react'
import {
  Editor,
  EditorState,
  KeyBindingUtil,
  getDefaultKeyBinding
} from 'draft-js'
import 'draft-js/dist/Draft.css'

const { hasCommandModifier } = KeyBindingUtil

export default class GoodEditor extends React.Component {
  state = {
    editorState: EditorState.createEmpty()
  }

  onChange = editorState => {
    this.setState({
      editorState
    })
  }

  // Handle intended text insertion before the insertion occurs. This may be
  // useful in cases where the user has entered characters that you would like
  // to trigger some special behavior. E.g. immediately converting `:)` to an
  // emoji Unicode character, or replacing ASCII quote characters with smart
  // quotes.
  handleBeforeInput = (chars, editorState) => {
    console.log('handleBeforeInput: ', chars, editorState)
  }

  // Handle other drops to prevent default text movement/insertion behaviour
  handleDrop = (selection, dataTransfer, isInternal) => {
    console.log('handleDrop: ', selection, dataTransfer, isInternal)
  }

  // Handle dropped files
  handleDroppedFiles = (selection, files) => {
    console.log('handleDroppedFiles: ', selection, files)
  }

  // Map a key command string provided by your key binding function to a
  // specified behavior.
  handleKeyCommand = (command, editorState) => {
    console.log('handleKeyCommand: ', command, editorState)
    if (command === 'editor-save') {
      console.log('dealing....')
      return 'handled'
    }
    return 'not-handled'
  }

  keyBindingFn = e => {
    console.log('keyBindingFn: ', e.keyCode)
    if (e.keyCode === 83 && hasCommandModifier(e)) {
      return 'editor-save'
    }
    return getDefaultKeyBinding(e)
  }

  handlePastedFiles = files => {
    console.log('handlePastedFiles: ', files)
  }

  handlePastedText = (text, html, editorState) => {
    console.log('handlePastedText: ', text, html, editorState)
  }

  // Useful for managing special behavior for pressing the `Return` key. E.g.
  // removing the style from an empty list item.
  handleReturn = (e, editorState) => {
    console.log('handleReturn: ', e, editorState)
  }

  render() {
    const { editorState } = this.state
    const { placeholder } = this.props
    return (
      <div className="good-editor">
        <Editor
          editorState={editorState}
          style={{ border: '1px solid red' }}
          onChange={this.onChange}
          handleBeforeInput={this.handleBeforeInput}
          handleDrop={this.handleDrop}
          handleDroppedFiles={this.handleDroppedFiles}
          handleKeyCommand={this.handleKeyCommand}
          keyBindingFn={this.keyBindingFn}
          handlePastedFiles={this.handlePastedFiles}
          handlePastedText={this.handlePastedText}
          handleReturn={this.handleReturn}
          placeholder={placeholder}
          // textAlignment="center"
        />
      </div>
    )
  }
}
