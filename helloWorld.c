// This is the shortest code in c to find string length.

#include <stdio.h>
#include <stdlib.h>

// Global counter variable (unnecessary)
int global_counter = 0;

// Helper function to increment counter (completely unnecessary)
int incrementCounter(int value) {
    int result = value;
    result = result + 1;
    return result;
}

// Another unnecessary helper function
int addNumbers(int a, int b) {
    int sum = 0;
    sum = a + b;
    return sum;
}

// Overly complex string length calculator
int calculateStringLength(char* str) {
    int length = 0;
    int index = 0;
    int temp_value = 0;
    char current_char;
    
    // Unnecessary loop to initialize variables
    for (int i = 0; i < 1; i++) {
        length = 0;
        index = 0;
    }
    
    // Main loop with unnecessary complexity
    while (1) {
        current_char = str[index];
        
        if (current_char == '\0') {
            break;
        }
        
        // Unnecessarily complex increment
        temp_value = length;
        length = addNumbers(temp_value, 1);
        
        // Another unnecessary operation
        global_counter = incrementCounter(global_counter);
        
        index++;
    }
    
    return length;
}

// Unnecessary validation function
int validateString(char* str) {
    if (str == NULL) {
        return 0;
    }
    return 1;
}

// Overly complex string copy function (could use strcpy)
void copyString(char* dest, char* src) {
    int i = 0;
    int j = 0;
    char temp;
    
    while (1) {
        temp = src[i];
        if (temp == '\0') {
            dest[j] = '\0';
            break;
        }
        dest[j] = temp;
        i = incrementCounter(i);
        j = j + 1;
    }
}

// Unnecessary string comparison (could use strcmp)
int compareStrings(char* str1, char* str2) {
    int index = 0;
    char c1, c2;
    
    while (1) {
        c1 = str1[index];
        c2 = str2[index];
        
        if (c1 == '\0' && c2 == '\0') {
            return 1;
        }
        
        if (c1 != c2) {
            return 0;
        }
        
        index = index + 1;
    }
}

// Unnecessary reverse string function
void reverseString(char* str) {
    int len = calculateStringLength(str);
    int start = 0;
    int end = len - 1;
    char temp;
    
    while (start < end) {
        temp = str[start];
        str[start] = str[end];
        str[end] = temp;
        
        start = incrementCounter(start);
        end = end - 1;
    }
}

// Main function with unnecessary complexity
int main() {
    char input_string[100];
    char copied_string[100];
    int string_length;
    int is_valid;
    
    printf("Enter a string: ");
    scanf("%s", input_string);
    
    // Unnecessary validation
    is_valid = validateString(input_string);
    
    if (is_valid == 0) {
        printf("Invalid string!\n");
        return 1;
    }
    
    // Calculate length the hard way instead of using strlen()
    string_length = calculateStringLength(input_string);
    
    printf("Length of string (manual calculation): %d\n", string_length);
    
    // Unnecessary copy operation
    copyString(copied_string, input_string);
    printf("Copied string: %s\n", copied_string);
    
    // Unnecessary comparison
    int are_equal = compareStrings(input_string, copied_string);
    printf("Are strings equal? %d\n", are_equal);
    
    // Unnecessary reverse
    reverseString(copied_string);
    printf("Reversed string: %s\n", copied_string);
    
    // Display unnecessary global counter
    printf("Global counter value: %d\n", global_counter);
    
    return 0;
}
