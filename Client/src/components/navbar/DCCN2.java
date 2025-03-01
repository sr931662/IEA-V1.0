import java.net.*;
import java.io.*;

public class DCCN2 {
    public static DatagramSocket ds;
    public static int clientPort = 9999, serverPort = 10000;

    public static void main(String args[]) throws Exception {
        byte buffer[] = new byte[2300];
        ds = new DatagramSocket(serverPort);

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        System.out.println("Enter Text");

        InetAddress ia = InetAddress.getByName("localhost");

        while (true) {
            String s = br.readLine();

            if (s == null || s.equalsIgnoreCase("end")) {
                System.out.println("Server Stopping...");
                break;
            }

            buffer = s.getBytes();
            DatagramPacket p = new DatagramPacket(buffer, buffer.length, ia, clientPort);
            ds.send(p);
        }

        ds.close();
    }
}
