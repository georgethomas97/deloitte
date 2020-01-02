package demo;

import java.io.File;
import java.io.IOException;

public class BatchMates {

	public static void main(String[] args) throws IOException {
		File file = new File("c:\\deloitte\\Batch\\BatchMates.txt");
		if (!file.exists()) {
			file.createNewFile();
		}
		File temp = new File("c:\\deloitte\\Batch");
		File[] list = temp.listFiles();

		for (File f : list) {
			if (f.isDirectory())
				System.out.println(f + " is a folder.");
			else
				System.out.println(f + " is a file.");
		}

	}
}
