import java.util.*;

public class RandomNum {
    
    Random rand;
    
    public RandomNum() {
	rand = new Random();
    }

    public int getRandomNum(int limit) {
	int rand_int1 = rand.nextInt(limit);
	return rand_int1;
    }

    public String getRandomColor() {
	int rand_int1 = getRandomNum(3);
	String color = "";

	switch (rand_int1) {
	case 0:
	    color = "Blue";
	    break;
	case 1:
	    color = "Yellow";
	    break;
	case 2:
	    color = "Orange";
	    break;
	default:
	    color = "butt";
	    break;
	}
	
	return color;
    }

    
    public static void main(String[] args) {
	RandomNum rN = new RandomNum();
	for (int i = 0; i < 30; i++) {
	    System.out.println(rN.getRandomColor());
	    try {
		Thread.sleep(2000);
	    }
	    catch (InterruptedException ex) { ex.printStackTrace(); }
	}
    }

}