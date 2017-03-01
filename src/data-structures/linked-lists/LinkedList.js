/* export default function LinkedList() {
  // Helper function
  function Node(element) {
    this.next = element;
    this.next = null;
  }

  let listSize = 0;
  let head = null;

  this.append = element => {
    let node = new Node(element);
    let current;

    // Si la lista esta vacía (Primer elemento)
    if (head === null) {
      head = node;
    } else {
      // Si ya tiene datos comenzamos a recorrer la lista desde head
      current = head;

      // Mientras exista un elemento en el nodo next... (cuando llegue a null sera el final de la lista)
      while(current.next) {
        // Current toma el valor del proximo elemento (next)
        current = current.next;
      }

      // Ahora current ya tiene el último elemento y asignamos el nuevo elemento a su next
      current.next = node;
    }

    // Incrementamos el tamaño de la lista
    listSize++;
  };

 this.insert = (position, element) => {

 };

 this.removeAt = position => {

 };

 this.remove = element => {

 };

 this.indexOf = element => {

 };

 this.hasElements = () => {

 };

 this.size = () => {

 };

 this.toString = () => {

 };

 this.print = () => {

 };
}
*/
