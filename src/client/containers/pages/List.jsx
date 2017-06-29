import React from 'react'
import { action, computed, observable } from 'mobx'
import { observer, inject } from 'mobx-react'
import { createStore } from './../../stores/appStore'
import TableRow from './TableRow.jsx'
import { Jumbotron, Button, Table } from 'reactstrap'
@observer(["state"])
export default class List extends React.Component {
    @observable pages
    @observable state
    store = createStore()

    @action static fetchData({ state }) {
        state.app.title = 'Home'
    }

    constructor(props) {
        super(props)
        this.state = props.state
        this.store.getPages().then((result) => {
            this.pages = result
        })
    }
    swapPages(first, second) {
        this.store.swapPages(first, second).then((result) => {
            this.pages = result
        })
    }
    render() {
        return (

            <Jumbotron>
                <h2>Pages</h2>
                <Button outline color="primary" onClick={() => this.props.history.push('/pages/new')}>Add page</Button>
                <Table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Order</th>
                        </tr>
                    </thead>
                    <tbody >
                        {this.pages && this.pages.map(page => {
                            page.swapFunction = this.swapPages.bind(this)
                            return <TableRow key={page._id} item={page} />
                        }
                        )}
                    </tbody>
                </Table>
            </Jumbotron>

        )
    }
}