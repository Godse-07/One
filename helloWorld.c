#include <stdio.h>
#include <stdlib.h>

// Define the structure for a node
struct Node {
    int data;
    struct Node* next;
};

// Function to create a new node
struct Node* createNode(int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->next = NULL;
    return newNode;
}

// Function to reverse the linked list (Iterative approach)
struct Node* reverseList(struct Node* head) {
    struct Node* prev = NULL;
    struct Node* current = head;
    struct Node* next = NULL;
    
    while (current != NULL) {
        // Store next node
        next = current->next;
        
        // Reverse current node's pointer
        current->next = prev;
        
        // Move pointers one position ahead
        prev = current;
        current = next;
    }
    
    // prev is the new head
    return prev;
}

// Recursive approach to reverse linked list
struct Node* reverseListRecursive(struct Node* head) {
    // Base case: empty list or single node
    if (head == NULL || head->next == NULL) {
        return head;
    }
    
    // Reverse the rest of the list
    struct Node* newHead = reverseListRecursive(head->next);
    
    // Put first element at the end
    head->next->next = head;
    head->next = NULL;
    
    return newHead;
}

// Function to insert node at the beginning
void push(struct Node** head_ref, int new_data) {
    struct Node* new_node = createNode(new_data);
    new_node->next = *head_ref;
    *head_ref = new_node;
}

// Function to print the linked list
void printList(struct Node* node) {
    while (node != NULL) {
        printf("%d ", node->data);
        if (node->next != NULL) {
            printf("-> ");
        }
        node = node->next;
    }
    printf("\n");
}

// Main function to test the reverse
int main() {
    struct Node* head = NULL;
    
    // Create linked list: 1 -> 2 -> 3 -> 4 -> 5
    push(&head, 5);
    push(&head, 4);
    push(&head, 3);
    push(&head, 2);
    push(&head, 1);
    
    printf("Original Linked List: \n");
    printList(head);
    
    // Reverse using iterative method
    head = reverseList(head);
    
    printf("\nReversed Linked List (Iterative): \n");
    printList(head);
    
    // Reverse again using recursive method (back to original)
    head = reverseListRecursive(head);
    
    printf("\nReversed Again (Recursive): \n");
    printList(head);
    
    return 0;
}
```

**Output:**
```
Original Linked List: 
1 -> 2 -> 3 -> 4 -> 5 

Reversed Linked List (Iterative): 
5 -> 4 -> 3 -> 2 -> 1 

Reversed Again (Recursive): 
1 -> 2 -> 3 -> 4 -> 5
