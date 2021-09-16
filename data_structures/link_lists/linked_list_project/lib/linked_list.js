// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value= val; 
        this.next= null
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head= null; 
        this.tail= null; 
        this.length= 0 ; 
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        const new_node= new Node(val); 
        if(!this.head){ 
            this.head= new_node; 
        }else{ 
            this.tail.next= new_node; 
        }

        this.length++; 
        this.tail= new_node; 
        return this
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if(!this.head) return undefined; 
        let current = this.head; 
        let newTail= current; 

        while(current.next){ 
            newTail=current; 
            current= current.next
        }

        this.tail= newTail; 
        this.tail.next= null; 
        
        this.length-- ; 
        if(this.length === 0){ 
            this.head= null; 
            this.tail= null; 
        }
        return current
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        const newNode= new Node(val); 

        if(!this.head){ 
            this.head= newNode; 
            this.tail= newNode; 
        }else{ 
            newNode.next= this.head; 
            this.head=newNode; 
        }

        this.length++; 
        return this
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if(!this.head) return undefined; 
        const removedHead= this.head; 
        this.head= removedHead.next; 

        this.length--; 
        if(this.length === 0){
            this.head= null;  
            this.tail= null; 
        }
        return removedHead
    }

    // TODO: Implement the contains method here
    contains(target) {
        let current= this.head
        while(current){ 
            if(current.value === target) return true
            current= current.next
        }
        return false
    }

    // TODO: Implement the get method here
    get(index) {

    }

    // TODO: Implement the set method here
    set(index, val) {

    }

    // TODO: Implement the insert method here
    insert(index, val) {

    }

    // TODO: Implement the remove method here
    remove(index) {

    }

    // TODO: Implement the size method here
    size() {

    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
