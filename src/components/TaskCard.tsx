function TaskCard({ task }) {
  return (
    <li className="bg-white rounded-lg shadow-md md:px-4 md:py-6">
      <p className="font-bold text-[0.9375rem] md:mb-2">{task.title}</p>
      <p className="text-medium-grey font-bold text-xs">
        Lorem ipsum, dolor sit
      </p>
    </li>
  );
}

export default TaskCard;
