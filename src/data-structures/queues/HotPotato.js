import Queue from './Queue';

export default function HotPotato(players, spins) {
  const queue = new Queue();

  for (let i = 0; i < players.length; i++) {
    queue.enqueue(players[i]);
  }

  let eliminated = '';

  while (queue.size() > 1) {
    for (let i = 0; i < spins; i++) {
      queue.enqueue(queue.dequeue());
    }

    eliminated = queue.dequeue();

    console.log(eliminated, 'fue eliminado de la papa caliente');
  }

  return queue.dequeue();
}
