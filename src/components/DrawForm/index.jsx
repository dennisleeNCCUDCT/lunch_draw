import React, { Component } from "react";
import { Form, Button, Header } from "tabler-react";
import "./style.css";

class DrawForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target);
  }

  render() {
    const {
      style,
      className,
      onSubmit,
      placeholder,
      value,
      drawItems,
      handleSkipAnimationChange,
      handleRemoveDrawnItemChange
    } = this.props;

    return (
      <div style={style} className={className}>
        <Header.H3>午餐吃什麼</Header.H3>
        <div className="form">
          <Form onSubmit={onSubmit}>
            <Form.FieldSet>
              <Form.Group label="List of Items" isRequired>
                <Form.Textarea
                  name="drawItems"
                  placeholder={placeholder}
                  value={value}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Checkbox
                  name="skipAnimation"
                  label="跳過動畫"
                  onChange={handleSkipAnimationChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Checkbox
                  name="noRepeat"
                  label="把餐廳或店家移除"
                  onChange={handleRemoveDrawnItemChange}
                />
              </Form.Group>
              <Button
                color="primary"
                type="submit"
                disabled={drawItems.length < 2}
              >
             確定
              </Button>
            </Form.FieldSet>
          </Form>
        </div>
      </div>
    );
  }
}

export default DrawForm;
