#include <stdio.h> 

void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main(void) {
    // ---- swap ----
    int x = 5;
    int y = 10;
    swap(&x, &y);
    printf("x = %i, y = %i\n", x, y);

    // ---- garbage values ----
    // int scores[1024]; 

    // for(int i = 0; i < 1024; i++) {
    //     printf("%i\n", scores[i]);
    // }
}