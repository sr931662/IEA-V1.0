import java.net.*;
public class prac
{
    public static void main(String args[]) throws UnknownHostException {
        InetAddress ia = InetAddress.getLocalHost();
        System.out.println(ia);

        ia = InetAddress.getByName("localhost");
        System.out.println(ia);

        InetAddress address[] = InetAddress.getAllByName("www.yahoo.com");
        for(int i=0; i<address.length; i++)
        {
            System.out.println(address[i]);
        }
    }
}