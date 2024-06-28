const TaskCard = () => {
  const handleAssign = () => {
    console.log('assign');
  };

  const handleUnassign = () => {
    console.log('unassign');
  };

  const handleChangeStatus = () => {
    console.log('change status');
  };

  return (
    <div className="task-card">
      <h3>task title</h3>
      <p>status: inprogress</p>
      <button onClick={handleAssign}>Assign</button>
      <button onClick={handleUnassign}>Unassign</button>
      <button onClick={handleChangeStatus}>Change Status</button>
    </div>
  );
};

export default TaskCard;
