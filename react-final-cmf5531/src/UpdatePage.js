import React from "react";

import {Modal, ModalBody, ModalHeader, InputGroup, InputGroupText, Input, ModalFooter, Button} from 'reactstrap';



class UpdatePage extends React.Component{
    render(){
        return (
            <Modal isOpen={this.props.modalStatus} toggle={this.props.toggle}>
            <ModalHeader toggle={this.props.toggle}>{this.props.college}, {this.props.department}</ModalHeader>
                <ModalBody>
                    <InputGroup>
                        <InputGroupText>Course</InputGroupText>
                        <Input placeholder="Courses"  onChange={this.props.updateCourse(this.value)}/>
                        </InputGroup>
                    <InputGroup>
                        <InputGroupText>Title</InputGroupText>
                        <Input placeholder="Title"  onChange={this.props.updateTitle(this.value)}/>
                    </InputGroup>
                    <InputGroup>
                        <InputGroupText>Details</InputGroupText>
                        <Input placeholder="Details"  onChange={this.props.updateDetails(this.value)}/>
                    </InputGroup>
                </ModalBody>
                <ModalFooter>
                        <Button color="secondary" onClick={this.props.cancel}>Cancel</Button>
                        <Button color="primary" onClick= {() => this.props.commit(this.props.id, this.props.course, this.props.title, this.props.details)}>Save</Button>
                </ModalFooter>
            </Modal>
        )

}
}


export default UpdatePage;