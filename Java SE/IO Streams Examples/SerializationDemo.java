import java.io.*;
public class Test implements Serializable
{
	String s1="Chennai";
	int a=100;
	double d=1987.765;
	public static void main(String[] args) throws Exception
	{
			Test t=new Test();
			FileOutputStream fos=new FileOutputStream("e:/emp.dat");
			ObjectOutputStream oos=new ObjectOutputStream(fos);
			oos.writeObject(t);
			oos.flush();
			oos.close();
		
			/*MyClass object2;
			FileInputStream fis=new FileInputStream("Serial.dat");
			ObjectInputStream ois=new ObjectInputStream(fis);
			object2=(MyClass)ois.readObject();
			ois.close();
			System.out.println("Object2:");
			object2.putData();*/
	}
}
