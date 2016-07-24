import java.util.ArrayList;
import java.util.List;

/**
 * Created by sophianguyen on 2016-07-06.
 */
public class reverseVowels {
    // A function that reverses the vowels of a string
    // Ex. apple -> eppla; initial -> anitiil; practice -> pretica

    public String reverseVowels(String word) {
        List<Character> cword = new ArrayList<>();
        for (char w : word.toCharArray()) {
            cword.add(w);
        }

        List<Character> vowels = new ArrayList<>();
        for (char c : "aeiou".toCharArray()) {
            vowels.add(c);
        }

        int i = 0;
        int j = cword.size()-1;

        while (i < j) {
            if (!vowels.contains(cword.get(i))) {
                i++;
                continue;
            }

            if (!vowels.contains(cword.get(j))) {
                j--;
                continue;
            }

            Character x = cword.get(i);
            cword.set(i, cword.get(j));
            cword.set(j, x);

            i++;
            j--;
        }

        return cword.toString();
    }

    public static void main(String[] args) {
        reverseVowels rv = new reverseVowels();

        String print = rv.reverseVowels("practice");

        System.out.println(print);
    }
}
