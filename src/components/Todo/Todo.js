import { Checkbox, Row, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { toggleStatusTodo } from '../../redux/actions';
import todoListSlice from '../TodoList/slideReducerTodoList'

const priorityColorMapping = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray',
};

export default function Todo({ id, name, prioriry, complete }) {
  const [checked, setChecked] = useState(complete);
  const dispatch = useDispatch()
  const toggleCheckbox = () => {
    setChecked(!checked);
    dispatch(todoListSlice.actions.toggleStatusTodo(id))
  };

  return (
    <Row
      justify='space-between'
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[prioriry]} style={{ margin: 0 }}>
        {prioriry}
      </Tag>
    </Row>
  );
}
