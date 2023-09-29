export default function taskBlock(trueOrFalse) {
  let task = 'This is a task';
  const task2 = 'This is another task';

  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }

  return [task, task2];
}
