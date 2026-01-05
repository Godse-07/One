/*
This is a basic invuilt math function code
*/

public class BuiltInMathExample {
    public static void main(String[] args) {
        double x = 4.7;
        int a = 10, b = 5;

        // Constants
        System.out.println("Pi (Math.PI): " + Math.PI);
        System.out.println("Euler's number (Math.E): " + Math.E);

        // Basic operations
        System.out.println("Absolute value of " + x + ": " + Math.abs(x));
        System.out.println("Maximum of " + a + " and " + b + ": " + Math.max(a, b));
        System.out.println("Minimum of " + a + " and " + b + ": " + Math.min(a, b));
        System.out.println("Square root of 64: " + Math.sqrt(64));
        System.out.println("2 to the power of 3: " + Math.pow(2, 3));

        // Rounding
        System.out.println("Round " + x + " to the nearest integer: " + Math.round(x));
        System.out.println("Round " + x + " up (ceil): " + Math.ceil(x));
        System.out.println("Round " + x + " down (floor): " + Math.floor(x));
        
        // Trigonometry (uses radians)
        System.out.println("Sine of PI/2: " + Math.sin(Math.PI / 2));

        // Random numbers (between 0.0 and 1.0)
        System.out.println("Random value: " + Math.random());
    }
}
