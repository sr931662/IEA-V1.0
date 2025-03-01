import java.net.*;

public class DCCN1 {
    public static DatagramSocket ds;
    public static int clientPort = 9999, serverPort = 10000;

    public static void main(String args[]) throws Exception {
        byte buffer[] = new byte[2300];
        ds = new DatagramSocket(clientPort);

        System.out.println("Client is waiting for server to send data");

        DatagramPacket p = new DatagramPacket(buffer, buffer.length);

        while (true) {
            ds.receive(p);
            String str = new String(p.getData(), 0, p.getLength());
            System.out.println(str);
        }
    }
}