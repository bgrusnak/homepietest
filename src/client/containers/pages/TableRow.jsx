import React from 'react'
import { action, computed, observable } from 'mobx'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
import { DragSource, DropTarget } from 'react-dnd'
import { NavLink } from 'reactstrap'

const rowTarget = {
    drop(props) {
        return props.item;
    },
};

const rowSource = {
    beginDrag(props) {
        return props
    },

    endDrag(props, monitor) {
        const dragged = monitor.getItem().item;
        const dropped = monitor.getDropResult();
        if (dropped && dropped.swapFunction) {
            dropped.swapFunction(dragged.order, dropped.order)
        }
    },
};

@DropTarget('row', rowTarget, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
}))

@DragSource('row', rowSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
}))

export default class TableRow extends React.Component {
    static propTypes = {
        connectDragSource: PropTypes.func.isRequired,
        isDragging: PropTypes.bool.isRequired,
        item: PropTypes.object.isRequired,
        connectDropTarget: PropTypes.func.isRequired,
        isOver: PropTypes.bool.isRequired,
        canDrop: PropTypes.bool.isRequired,
    };
    render() {
        const { canDrop, isOver, connectDropTarget, isDragging, connectDragSource, item, swapFunction } = this.props;
        this.swapFunction = swapFunction
        return (
            connectDropTarget(connectDragSource(
                <tr>
                    <td><NavLink href={"/pages/" + item._id}>{item.title}</NavLink></td>
                    <td>{item.order}</td>
                </tr>,
            )
            ));
    }
}