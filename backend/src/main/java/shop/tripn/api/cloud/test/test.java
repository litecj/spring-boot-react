package shop.tripn.api.cloud.test;

import java.util.Scanner;

public class test {
    //    public static void main(String[] args) {
////        System.out.println("계산기");
////        Scanner sc = new Scanner(System.in);
////
//
//    }
    public static void main(String[] args) {
//        for (int i = 1; i <= 9; i++) {
//            for (int j = 2; j <= 9; j++) {
//                System.out.print(j + " * " + i + " = " + String.format("%2d", i * j) +'\t');
////                System.out.print((j+4) + " * " + i + " = " + String.format("%2d", i * (j+4))+'\t');
////                System.out.print("    ");
//            }
//            System.out.println();
//        }

        for (int i = 2; i <= 9; i+=4) {
            for (int j = 1; j <= 9; j++) {
                System.out.printf("%d * %d = %d \t", i, j, i*j);
                System.out.printf("%d * %d = %d \t", i+1, j, (i+1)*j);
                System.out.printf("%d * %d = %d \t", i+2, j, (i+2)*j);
                System.out.printf("%d * %d = %d \t", i+3, j, (i+3)*j);
//                System.out.printf("%d * %d = %d \t", i+4, j, (i+4)*j);
                System.out.println();
//                System.out.print(i + " * " + j + " = " + String.format("%2d", i * j) +'\t');
//                System.out.print((i+1) + " * " + j + " = " + String.format("%2d", (i+1) * j) +'\t');
            }
            System.out.println();
        }
    }

}