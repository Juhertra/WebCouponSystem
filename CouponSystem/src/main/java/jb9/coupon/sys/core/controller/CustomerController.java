package jb9.coupon.sys.core.controller;

import java.util.Collection;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import coupon.sys.core.beans.Coupon;
import coupon.sys.core.beans.CouponType;
import coupon.sys.core.beans.Customer;
import coupon.sys.core.exceptions.CouponSystemExceptions;
import coupon.sys.core.facade.ClientType;
import coupon.sys.core.facade.CustomerFacade;
import coupon.sys.core.main.CouponSystem;

@CrossOrigin(origins = "*")
@RestController
public class CustomerController {

	Customer customer = null;
	CustomerFacade customerFacade = null;
	
	private CustomerFacade getFacade() {

		try {
			customerFacade = (CustomerFacade) CouponSystem.getInstance().login(customer.getName(), customer.getPassword(), ClientType.CUSTOMER);
		//	customerFacade = (CustomerFacade) CouponSystem.getInstance().login("John Day", "1111", ClientType.CUSTOMER);
			customer = customerFacade.getCustomer();
		} catch (CouponSystemExceptions e) {
			System.out.printf("Coupon System Exception", e);
		}

		System.out.println("Customer: " + customer.getName());
		return customerFacade;

	}
	
	@ResponseStatus(HttpStatus.CREATED)
	@RequestMapping(value = "/Customer/purchaseCoupon", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public void purchaseCoupon(@RequestBody Coupon coupon) {
		CustomerFacade customerFacade = getFacade();
		try {
			customerFacade.purchaseCoupon(coupon);
		} catch (CouponSystemExceptions e) {
			System.out.printf("Couldn't purchase coupon for customer: " + customer.getName(), e);

		}
	}

	@RequestMapping(value = "/Customer/getAllAvailableCoupons", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Collection<Coupon> getAllAvailableCoupons() {
		CustomerFacade customerFacade = getFacade();
		Collection<Coupon> getAllAvailableCoupons = null;
		try {
			getAllAvailableCoupons = customerFacade.getAllAvailableCoupons();
		} catch (CouponSystemExceptions e) {
			System.out.println("Couldn't get coupons, for company: " + customer.getName());
		}
		return getAllAvailableCoupons;
	}

	@RequestMapping(value = "/Customer/getAllAvailableCouponsByType/{couponType}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Collection<Coupon> getAllAvailableCouponsByType(@PathVariable("couponType") CouponType couponType) {
		CustomerFacade customerFacade = getFacade();
		Collection<Coupon> getAllAvailableCouponsByType = null;
		try {
			getAllAvailableCouponsByType = customerFacade.getAllAvailableCouponsByType(couponType);
		} catch (CouponSystemExceptions e) {
			System.out.println("Couldn't get all coupons type: " + couponType + ", for customer: " + customer.getName());
		}
		return getAllAvailableCouponsByType;
	}
	
	@RequestMapping(value = "/Customer/getAllAvailableCouponsByPrice/{price}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Collection<Coupon> getAllAvailableCouponsByPrice(@PathVariable("price") double price) {
		CustomerFacade customerFacade = getFacade();
		Collection<Coupon> getAllAvailableCouponsByPrice = null;
		try {
			getAllAvailableCouponsByPrice = customerFacade.getAllAvailableCouponsByPrice(price);
		} catch (CouponSystemExceptions e) {
			System.out.println("Couldn't get all coupons by price: " + price + ", for company: " + customer.getName());
		}
		return getAllAvailableCouponsByPrice;
	}
	
	@RequestMapping(value = "/Customer/getAllPurchasedCoupons", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Collection<Coupon> getAllPurchasedCoupons() {
		CustomerFacade customerFacade = getFacade();
		Collection<Coupon> allPurchasedCoupons = null;
		try {
			allPurchasedCoupons = customerFacade.getAllPurchasedCoupons();
		} catch (CouponSystemExceptions e) {
			System.out.println("Couldn't get all coupons for company: " + customer.getName());
		}
		return allPurchasedCoupons;
	}

	@RequestMapping(value = "/Customer/getAllPurchasedCouponsByType/{couponType}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Collection<Coupon> getAllPurchasedCouponsByType(@PathVariable("couponType") CouponType couponType) {
		CustomerFacade customerFacade = getFacade();
		Collection<Coupon> getAllPurchasedCouponsByType = null;
		try {
			getAllPurchasedCouponsByType = customerFacade.getAllPurchasedCouponsByType(couponType);
		} catch (CouponSystemExceptions e) {
			System.out.println("Couldn't get all coupons type: " + couponType + ", for customer: " + customer.getName());
		}
		return getAllPurchasedCouponsByType;
	}
	
	@RequestMapping(value = "/Customer/getAllPurchasedCouponsByPrice/{price}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Collection<Coupon> getAllPurchasedCouponsByPrice(@PathVariable("price") double price) {
		CustomerFacade customerFacade = getFacade();
		Collection<Coupon> getAllPurchasedCouponsByPrice = null;
	//	double price = 0;
		try {
			getAllPurchasedCouponsByPrice = customerFacade.getAllPurchasedCouponsByPrice(price);
		} catch (CouponSystemExceptions e) {
			System.out.println("Couldn't get all coupons by price: " + price + ", for company: " + customer.getName());
		}
		return getAllPurchasedCouponsByPrice;
	}
}
