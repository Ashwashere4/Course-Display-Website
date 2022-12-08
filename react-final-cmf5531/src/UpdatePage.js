import React from "react";

import {Modal, ModalBody, ModalHeader, ModalFooter, Button, Form, FormGroup, Input, Label} from 'reactstrap';



class UpdatePage extends React.Component{
    render(){
        return (
            <Modal isOpen={this.props.modalStatus} toggle={this.props.toggle}>
            <ModalHeader toggle={this.props.toggle}>{this.props.college}, {this.props.department}</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="course" sm={2}>Course</Label>
                            <Input type="Course" name="Course" id="course" placeholder="Course name" value = {this.props.newCourses} onChange = {(e) => this.props.updateCourse(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="title" sm={2}>Title</Label>
                            <Input type="Title" name="Title" id="title" placeholder="Title name" value = {this.props.newTitle} onChange = {(e) => this.props.updateTitle(e.target.value)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="detail" sm={2}>Detail</Label>
                            <Input type="Detail" name="Detail" id="detail" placeholder="Detail name" value = {this.props.newDetails} onChange = {(e) => this.props.updateDetails(e.target.value)}/>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                        <Button color="secondary" onClick={() => this.props.cancel()}>Cancel</Button>
                        <Button color="primary" onClick= {() => this.props.commit(this.props.id)}>Save</Button>
                </ModalFooter>
            </Modal>
        )

}
}


export default UpdatePage;