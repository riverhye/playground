#include <stdio.h>

int main(void) {
    int n = 50;
    int *p = &n;
    printf("n: %p\n", &n);
    printf("p: %p\n", p);
    // - 참조(reference): &n처럼 값에서 주소를 얻는 것
    // - 역참조(dereference): *p처럼 주소에서 값으로 가는 것

    char *s = "Hello, World!";
    printf("s: %p\n", s);
    printf("s address: %p\n", &s); // why both is different? 
    
    printf("%c\n", *s);
    printf("%c\n", *(s + 1)); // same as s[1]
    printf("%c\n", *(s + 2)); // same as s[2]
}