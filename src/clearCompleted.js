export default function clearCompleted(list) {
  return list.filter((completed) => completed.completed !== true);
}