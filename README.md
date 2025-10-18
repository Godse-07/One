# This is a Java code for checking linked-list is a palindrome or not


```java
public class PalindromeLinkedList {
    static class ListNode {
        int val;
        ListNode next;
        ListNode(int val) { this.val = val; }
    }

    public static boolean isPalindrome(ListNode head) {
        if (head == null || head.next == null) return true;
        ListNode slow = head, fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        if (fast != null) slow = slow.next;
        ListNode second = reverse(slow);
        ListNode p1 = head, p2 = second;
        boolean ans = true;
        while (p2 != null) {
            if (p1.val != p2.val) { ans = false; break; }
            p1 = p1.next;
            p2 = p2.next;
        }
        reverse(second);
        return ans;
    }

    private static ListNode reverse(ListNode head) {
        ListNode prev = null;
        while (head != null) {
            ListNode next = head.next;
            head.next = prev;
            prev = head;
            head = next;
        }
        return prev;
    }
}
