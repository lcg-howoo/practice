package com.example.poclab;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.concurrent.*;

@SpringBootApplication
public class PoclabApplication {

    public static void main(String[] args) throws InterruptedException, ExecutionException {

        ExecutorService executorService = Executors.newFixedThreadPool(10);
        Callable<Boolean> booleanCallable = () -> {
            Thread.sleep(1000);
            return true;
        };

        Future<Boolean> booleanFuture = executorService.submit(booleanCallable);
        while (!booleanFuture.isDone()) {
            System.out.println("Not yet");
            Thread.sleep(1000);
        }
        Boolean result = booleanFuture.get();
        System.out.println("Retrieved result from the task - " + result);

        executorService.shutdown();


//        Runnable task = new Runnable() {
//            public void run() {
//                System.out.println("Thread: " + Thread.currentThread().getName());
//            }
//        };
//
//        ExecutorService executor = Executors.newFixedThreadPool(10);
//
//        for (int i = 0; i < 10; i++) {
//           executor.submit(task);
//        }
//        SpringApplication.run(PoclabApplication.class, args);
    }

}
