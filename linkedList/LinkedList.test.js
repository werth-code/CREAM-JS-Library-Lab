const { TestScheduler } = require('jest');
const LinkedList = require('./LinkedList');
const ListNode = require('./LinkedList');


test("Test Create List & Node", () => {
    let node1 = new ListNode(10)
    let node2 = new ListNode(20)
    let list = new LinkedList(node1)
    node1.next = node2

    let actual = list.data.data
    let expected = 10

    expect(actual).toEqual(expected);
});

test("Adding New Node", () => {

    let node1 = new ListNode(10)
    let node2 = new ListNode(20)
    let list = new LinkedList(node1)
    node1.next = node2

    let actual = node1.next.data
    let expected = 20

    expect(actual).toEqual(expected);
});

test("Get First Node getFirst()", () => {
    let node1 = new ListNode(10)
    let list = new LinkedList(node1)


    let actual = list.getFirst()
    let expected = 10

    expect(actual).toBe(expected);
});