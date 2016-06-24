#include <iostream>
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <string.h>

/* A guessing game. User is asked to input a number from 1 to 20 
and see if it matches the computer's randomly assigned number
*/

int main() {
   
    int number;
    char buffer[3];
    
    srand (time(NULL));
    
    number = rand() % 20 + 1;
    
    do {
        printf ("Guess a number between 1 and 20, or enter 'q' to quit: ");
        scanf("%2s", buffer);
        
        if (strcmp(buffer, "q") == 0) {
            puts ("Thanks for playing!");
            exit(0);
        }

        else if ((atoi (buffer)) > number) puts ("Try a bit lower.");      
   
        else if ((atoi (buffer))  < number) puts ("Try a bit higher.");  
          
        }
    
   
    while ((atoi (buffer))  != number);
    puts ("That's right!");
    return 0;    
}
   

    