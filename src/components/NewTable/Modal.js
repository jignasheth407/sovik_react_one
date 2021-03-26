import React, { Component } from 'react';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.handleSave = this.handleSave.bind(this);
        this.state = {
            contrione: '',
            channel: '',
            contritwo:'',
            change:'',
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            contrione: nextProps.contrione,
            channel: nextProps.channel,
            contritwo: nextProps.contritwo,
            change: nextProps.change,
        });
    }

    contrioneHandler(e) {
        this.setState({ contrione: e.target.value });
    }

    channelHandler(e) {
        this.setState({ channel: e.target.value });
    }

    contritwoHandler(e) {
        this.setState({ contritwo: e.target.value })
    }

    changeHandler(e) {
        this.setState({ change: e.target.value })
    }

    handleSave() {
        const item = this.state;
        this.props.saveModalDetails(item)
    }

    render() {
        return (
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Contribution</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        <div className="row">
                            <div className="col-sm-12 col-md-4 col-12"><span className="modal-lable">Contribution One:</span></div>
                            <div className="col-sm-12 col-md-6 col-12"><input value={this.state.contrione} onChange={(e) => this.contrioneHandler(e)} /></div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-4 col-12"><span className="modal-lable">Channel:</span></div>
                            <div className="col-sm-12 col-md-6 col-12"><input value={this.state.channel} onChange={(e) => this.channelHandler(e)} /></div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-4 col-12"><span className="modal-lable">Contribution Two:</span></div>
                            <div className="col-sm-12 col-md-6 col-12"><input value={this.state.contritwo} onChange={(e) => this.contritwoHandler(e)} /></div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-4 col-12"><span className="modal-lable">Change:</span></div>
                            <div className="col-sm-12 col-md-6 col-12"><input value={this.state.change} onChange={(e) => this.changeHandler(e)} /></div>
                        </div>                            
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn_chart_danger" data-dismiss="modal">Close</button>
                            <button type="button" className="btn_chart" data-dismiss="modal" onClick={() => { this.handleSave() }}>Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;