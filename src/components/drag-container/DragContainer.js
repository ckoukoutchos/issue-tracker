import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import styles from './DragContainer.module.css';
import Avatar from '../avatar/Avatar';
import Card from '../card/Card';

const DragContainer = ({ items, updateOrder }) => {
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const reorderedItems = reorder(
      items,
      result.source.index,
      result.destination.index
    );
    updateOrder(reorderedItems);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={String(item.id)} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Card>
                      <div className={styles.container}>
                        <Avatar url={item.avatar} />
                        <p className={styles.title}>{item.title}</p>
                      </div>
                      <p className={styles.text}>Created: {item.created}</p>
                      <p className={styles.text}>Last Updated: {item.updated}</p>
                    </Card>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default DragContainer;
