export default class LinkedList {
  constructor() {
    this.head = null;
    this.listSize = 0;
  }

  Node(element) {
    return {
      element,
      next: null
    };
  }

  append(element) {
    const node = this.Node(element);
    let current;

    // Si la lista esta vacia (Primer elemento)
    if (this.head === null) {
      this.head = node;
    } else {
      // Si ya tiene datos comenzamos a recorrer la lista desde head
      current = this.head;

      // Mientras exista un element en el node.next (cuando llegue a null sera el final de la lista)
      while (current.next) {
        // current tome el valor del proximo elemento (next)
        current = current.next;
      }

      // Ahora current ya tiene el último elemento y asignamos el nuevo elemento a su next
      current.next = node;
    }

    // Incrementamos el tamaño de la lista
    this.listSize++;
  }

  insert(position, element) {
    // Validar el rango
    if (position >= 0 && position <= this.listSize) {
      const node = this.Node(element);
      let current = this.head;
      let previous;
      let index = 0;

      // Agregar un elemento al inicio la lista
      if (position === 0) {
        node.next = current;
        this.head = node;
      } else {
        // Recorrer la lista hasta la posicion indicada
        while (index++ < posicion) {
          previous = current;
          current = current.next;
        }

        node.next = current;
        previous.next = node;
      }

      // Incrementamos el tamaño de la lista
      this.listSize++;

      return true;
    }

    return false;
  }

  removeAt(position) {
    // Validar el rango
    if (position > -1 && position < this.listSize) {
      let current = this.head;
      let previous;
      let index = 0;

      // Quitamos el primer elemento
      if (position === 0) {
        this.head = current.next;
      } else {
        // Recorremos la lista hasta la posicion indicada
        while (index++ < position) {
          previous = current;
          current = current.next;
        }

        // Enlazamos el elemento anterior con el next del current (saltamos el elemento para eliminarlo)
        previous.next = current.next;
      }

      this.listSize--;

      // Retornamos el elemento eliminado
      return current.element;
    }

    return false;
  }

  remove(element) {
    const index = this.indexOf(element);

    return this.removeAt(index);
  }

  indexOf(element) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.element === element) {
        return index;
      }

      index++;
      current = current.next;
    }

    return -1;
  }

  hasElements() {
    return this.listSize > 0;
  }

  size() {
    return this.listSize;
  }

  print() {
    let current = this.head;
    let string = '';
    let index = 0;

    while (current) {
      string += `[${index}]${current.element}${current.next ? '=>' : ''}`;
      current = current.next;
      index++;
    }

    return string;
  }
}
