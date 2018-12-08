package jb9;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import coupon.sys.core.exceptions.ConnectionPoolException;
import coupon.sys.core.exceptions.CouponDaoDbException;

@SpringBootApplication
public class CouponSystemApplication {

	public static void main(String[] args) throws CouponDaoDbException, ConnectionPoolException, InterruptedException {
		SpringApplication.run(CouponSystemApplication.class, args);
		
		
		
	}
}
