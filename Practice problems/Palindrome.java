/**
 * Created by sophianguyen on 2016-07-20.
 */

// A file where I set up and write random short coding challenges

public class Palindrome {
    // Create a function that returns true if a given string is a palindrome
    public static boolean palindrome(String s) {
        int x = 0;                  // Index at beginning of string
        int y = s.length()-1;       // Index at end of string

        if (s.length() == 0 || s.length() == 1) {      // If the input string is empty, we'll say it's a palindrome
            return true;
        }

        else {

        Character a = s.charAt(x);       // Character at beginning of string (a)
        String c = a.toString();         // Convert (a) to a string (c)
        Character b = s.charAt(y);       // Character at end of string (b)
        String d = b.toString();         // Convert (b) to a string (d)

            while (c.equals(d) && (x != y)) {  // Else, while the first and last characters are the same
                x++;
                a = s.charAt(x);
                c = a.toString();
                y--;
                b = s.charAt(y);
                d = b.toString();
            }
            if (x != y) {         // If the beginning and end indexes are different when the while loops exits,
                return false;     // it's not a palindrome
            }
            return true;          // If it
        }
    }

    public static void main(String[] args) {
        String a = "a";
        String b = "aba";
        String c = "caba";
        String d = "abcda";
        String e = "";
        String f = "a b c d f";
        String g = "a b c b a";

        System.out.println(palindrome(a));      // Should return true
        System.out.println(palindrome(b));      // Should return true
        System.out.println(palindrome(c));      // Should return false
        System.out.println(palindrome(d));      // Should return false
        System.out.println(palindrome(e));      // Should return true
        System.out.println(palindrome(f));      // should return false
        System.out.println(palindrome(g));      // Should return true
    }
}
