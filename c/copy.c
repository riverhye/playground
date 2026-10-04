#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

int main(void) {
    char *s = "hi!";

    // it's not using get_string, so null check isnt necessary
    // if (s == NULL) {
    //     return 1;
    // }

    char *t = malloc(strlen(s) + 1); // +1 for the null terminator

    // conventionally, we should check if malloc succeeded
    if(t == NULL) {
        return 1;
    }

    strcpy(t, s);

    if(strlen(s) > 0) {
        t[0] = toupper(t[0]);
    }

    printf("s address: %p\n", s);
    printf("t address: %p\n", t);

    printf("s: %s\n", s);
    printf("t: %s\n", t);

    free(t); // heap memory(malloc, calloc, realloc) should be freed after use to avoid memory leaks
}