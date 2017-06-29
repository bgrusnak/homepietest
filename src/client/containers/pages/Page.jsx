import React from 'react'
import { action, computed, observable } from 'mobx'
import { observer } from 'mobx-react'
import {
    Button, Form, FormGroup, Label, Input, FormText,
    Table, Jumbotron
} from 'reactstrap'
import { createStore } from './../../stores/appStore'

@observer(["state"])
export default class Page extends React.Component {
    store = createStore()
    @observable page = {}
    @observable currentEdit
    @observable currentEditValue
    @observable newQuestion = false
    constructor(props) {
        super(props)
        this.state = props.state
        if (this.props.route.path == '/pages/new') {
            this.state.app.title = 'Add page'
        } else {
            this.store.getPage(this.props.params.PAGEID).then((result) => {
                if (!result || result.length == 0) window.location = '/404'
                this.page = result
                this.canSave = true
                this.state.app.title = 'Edit page: ' + this.page.title
            })
        }
    }

    editQuestion(order) {
        this.currentEdit = order
        this.page.questions.map(question => {
            if (question.order == order) this.currentEditValue = question.question
        })
    }

    saveQuestion(order) {
        if (this.newQuestion) {
            this.page.questions.push({
                question: this.currentEditValue,
                order: this.currentEdit
            })
            this.newQuestion = false
        } else {
            this.page.questions = this.page.questions.map(question => {
                return question.order == order ? {
                    question: this.currentEditValue,
                    order: question.order
                } : question
            })
        }
        this.currentEdit = undefined
        this.currentEditValue = undefined
    }

    cancelQuestion(order) {
        this.newQuestion = false
        this.currentEdit = undefined
        this.currentEditValue = undefined
    }

    changeQuestion(e) {
        this.currentEditValue = e.target.value
    }

    addQuestion(e) {
        this.newQuestion = true
        if (!this.page.questions) this.page.questions = []
        this.currentEdit = this.page.questions ? this.page.questions.reduce((maxVal, current) => {
            return Math.max(maxVal, current.order)
        }, 0) + 1 : 1
        this.currentEditValue = ''
    }

    savePage(e) {
        if (this.props.params.PAGEID) {
            this.store.updatePage(this.props.params.PAGEID, this.page).then((result) => {
                window.location = '/'
            })
        } else if (this.page.title && this.page.title.length > 0) {
            this.store.addPage(this.page).then((result) => {
                if (result._id) window.location = '/pages/' + result._id
            })
        }
    }
    handleChangeValue = (event) => {
        this.page[event.target.name] = event.target.value
    }

    render() {
        return <Jumbotron>
            <h3>{this.state.app.title}</h3>
            <Form >
                <FormGroup>
                    <Label for="title">Page title</Label>
                    <Input name="title" id="title" placeholder="Enter page title" value={this.page.title} onChange={this.handleChangeValue.bind(this)} />
                </FormGroup>
                <FormGroup>
                    <Label for="category">Category</Label>
                    <Input name="category" id="category" placeholder="Enter category" value={this.page.category} onChange={this.handleChangeValue.bind(this)} />
                </FormGroup>
                <FormGroup>
                    <Label for="screen">Screen type</Label>
                    <Input name="screen" id="screen" placeholder="Enter screen type" value={this.page.screen} onChange={this.handleChangeValue.bind(this)} />
                </FormGroup>
                <FormGroup>
                    <Button onClick={this.addQuestion.bind(this)}>Add</Button>
                </FormGroup>
                <FormGroup>
                    <Table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Order</th>
                                <th>&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.newQuestion &&
                                <tr key="q_new">
                                    <td> <Input name="q_new" id="q_new" placeholder="Add question" value={this.currentEditValue} onChange={this.changeQuestion.bind(this)} />
                                    </td>
                                    <td>{this.currentEdit}</td>
                                    <td>
                                        <Button onClick={this.saveQuestion.bind(this, this.currentEdit)}>Save</Button>
                                        <Button onClick={this.cancelQuestion.bind(this, this.currentEdit)}>Cancel</Button>
                                    </td>
                                </tr>
                            }
                            {this.page.questions && this.page.questions.map(question =>
                                <tr key={question.order}>
                                    <td>{this.currentEdit == question.order ?
                                        <Input name={"q_" + question.order} id={"q_" + question.order} placeholder="Edit question" value={this.currentEditValue} onChange={this.changeQuestion.bind(this)} />
                                        :
                                        question.question
                                    }</td>
                                    <td>{question.order}</td>
                                    <td>{this.currentEdit ?
                                        <div>
                                            {this.currentEdit == question.order ?
                                                <div>
                                                    <Button onClick={this.saveQuestion.bind(this, question.order)}>Save</Button>
                                                    <Button onClick={this.cancelQuestion.bind(this, question.order)}>Cancel</Button>
                                                </div>
                                                : null}
                                        </div>
                                        : <Button onClick={this.editQuestion.bind(this, question.order)}>Edit</Button>
                                    }</td>
                                </tr>
                            )}

                        </tbody>
                    </Table>
                </FormGroup>
                <Button onClick={this.savePage.bind(this)} >Save</Button>
            </Form>
        </Jumbotron>
    }
}