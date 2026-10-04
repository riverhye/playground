#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main (void) {
    char *s ="HI!";
    char *t = "HI!";

    // Same string literal, so s and t point to the same memory location
    if(s==t) {
        printf("s and t are equal\n"); // here!
    } else {
        printf("s and t are not equal\n");
    }

    printf("s: %s\n", s);
    printf("t: %s\n", t);
    printf("s address: %p\n", s);
    printf("t address: %p\n", t);

    // printf(s == t);
    // -- error: incompatible integer to pointer conversion passing 'int' to parameter of type 'const char *' [-Wint-conversion] --
    // ㄴprintf is declared as int printf(const char *format, ...);
    // ㄴBut s == t is a boolean expression that evaluates to 0 or 1, which is an int.
    printf("s == t: %d\n", s == t); // prints 1 if equal, 0 if not equal
}