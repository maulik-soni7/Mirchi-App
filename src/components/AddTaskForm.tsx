import { useForm } from 'react-hook-form';

// interface FormData {
//   title: string;
// }

const AddTaskForm: React.FC = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('title', {
            required: true,
            maxLength: 30
          })}
          type="text"
          placeholder="Task title"
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTaskForm;
