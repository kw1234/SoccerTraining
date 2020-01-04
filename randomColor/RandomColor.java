import java.util.*;
import javax.swing.JFrame;
import javax.swing.JLabel;
import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.Dimension;
import java.awt.event.WindowEvent;

public class RandomColor {
    
    Random rand;
    
    public RandomColor() {
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

    public void createFrame(String color) {
	JFrame frame = new JFrame("FrameDemo");
	frame.setDefaultCloseOperation(JFrame.DISPOSE_ON_CLOSE);
	frame.getContentPane().add(new JLabel("mama"), BorderLayout.CENTER);

	switch(color) {
	case "Yellow":
	    frame.getContentPane().setBackground(Color.yellow);
	    break;
	case "Blue":
	    frame.getContentPane().setBackground(Color.blue);
	    break;
	case "Orange":
	    frame.getContentPane().setBackground(Color.orange);
	    break;
	default:
	    frame.getContentPane().setBackground(Color.red);
	    break;
	}
	
	frame.setPreferredSize(new Dimension(1000, 1000));
        frame.pack();
	frame.setVisible(true);
	try {
	    Thread.sleep(1000);
	}
	catch (InterruptedException ex) { ex.printStackTrace(); }
	frame.dispatchEvent(new WindowEvent(frame, WindowEvent.WINDOW_CLOSING));
    }
    
    public static void main(String[] args) {
	RandomColor rC = new RandomColor();
	for (int i = 0; i < 1000; i++) {
	    String color = rC.getRandomColor();
	    rC.createFrame(color);
	    
	    /*try {
		Thread.sleep(2000);
	    }
	    catch (InterruptedException ex) { ex.printStackTrace(); }*/
	}
    }

}