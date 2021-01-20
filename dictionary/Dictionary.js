function Dictionary(head) {
    this.head = head

    this.size = function() {
        let count = 0; 
        let node = this.head;
        while (node) {
            count++;
            node = node.next
        }
        return count;
    }   
}

module.exports = Dictionary;