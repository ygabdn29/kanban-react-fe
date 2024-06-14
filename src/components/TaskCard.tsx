function TaskCard({ task }) {
  return (
    <li className="bg-white rounded-lg md:px-4 md:py-6">
      <p className="font-bold text-[0.9375rem]">{task.title}</p>
    </li>
  );
}

export default TaskCard;
