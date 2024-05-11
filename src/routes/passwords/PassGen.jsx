import { Component } from "react"

import createRandomPass from "../../utils/randomPass";


export default class PassGen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      passLength: 16,
      newPass: '',
      isHidden: true,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({passLength: event.target.value});
  }

  handleSubmit(event) {
    const newPass = createRandomPass(this.state.passLength);
    this.setState({newPass: newPass});
    this.setState({isHidden: false});
    event.preventDefault();
  }

  render() {
    return(
      <div id="passgen" className="d-flex flex-column align-items-center">
        <span className="fs-5 mb-3">Генератор паролей</span>
        <form onSubmit={this.handleSubmit} className="form-">
          <div className="input-group mb-2">
            <input className="form-control"
                   type="number"
                   name="pass-length"
                   id="pass-length"
                   placeholder="pass length"
                   value={this.state.passLength}
                   onChange={this.handleChange}/>
            <input type="submit" value="Gen" className="btn btn-secondary"/>
          </div>
        </form>
        <p className="d-flex small p-1 overflow-visible"
              hidden={this.state.isHidden}>
          {this.state.newPass ? this.state.newPass : ''}
        </p>
      </div>
    )
  }
}