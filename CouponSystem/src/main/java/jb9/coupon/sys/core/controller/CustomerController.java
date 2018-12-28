package jb9.coupon.sys.core.controller;

import java.util.Collection;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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
import coupon.sys.core.facade.CustomerFacade;

@CrossOrigin(origins = "*")
@RestController
public class CustomerController {

	private static final Logger logger = LoggerFactory.getLogger(CustomerController.class);
	Customer customer = null;

	/**
	 * @param request
	 * @return
	 */
	private CustomerFacade getFacade(HttpServletRequest request) {
		CustomerFacade customerFacade = (CustomerFacade) request.getSession().getAttribute("facade");
		return customerFacade;
	}

	/**
	 * @param coupon
	 * @param request
	 */
	@ResponseStatus(HttpStatus.CREATED)
	@RequestMapping(value = "/Customer/purchaseCoupon", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public void purchaseCoupon(@RequestBody Coupon coupon, HttpServletRequest request) {
		CustomerFacade customerFacade = getFacade(request);
		try {
			customerFacade.purchaseCoupon(coupon);
		} catch (CouponSystemExceptions e) {
			logger.error("Couldn't purchase coupon for customer: " + customer.getName(), e);

		}
	}

	/**
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/Customer/getAllAvailableCoupons", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Collection<Coupon> getAllAvailableCoupons(HttpServletRequest request) {
		CustomerFacade customerFacade = getFacade(request);
		Collection<Coupon> getAllAvailableCoupons = null;
		try {
			getAllAvailableCoupons = customerFacade.getAllAvailableCoupons();
		} catch (CouponSystemExceptions e) {
			logger.error("Couldn't get coupons, for company: " + customer.getName());
		}
		return getAllAvailableCoupons;
	}

	/**
	 * @param couponType
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/Customer/getAllAvailableCouponsByType/{couponType}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Collection<Coupon> getAllAvailableCouponsByType(@PathVariable("couponType") CouponType couponType,
			HttpServletRequest request) {
		CustomerFacade customerFacade = getFacade(request);
		Collection<Coupon> getAllAvailableCouponsByType = null;
		try {
			getAllAvailableCouponsByType = customerFacade.getAllAvailableCouponsByType(couponType);
		} catch (CouponSystemExceptions e) {
			logger.error("Couldn't get all coupons type: " + couponType + ", for customer: " + customer.getName());
		}
		return getAllAvailableCouponsByType;
	}

	/**
	 * @param price
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/Customer/getAllAvailableCouponsByPrice/{price}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Collection<Coupon> getAllAvailableCouponsByPrice(@PathVariable("price") double price,
			HttpServletRequest request) {
		CustomerFacade customerFacade = getFacade(request);
		Collection<Coupon> getAllAvailableCouponsByPrice = null;
		try {
			getAllAvailableCouponsByPrice = customerFacade.getAllAvailableCouponsByPrice(price);
		} catch (CouponSystemExceptions e) {
			logger.error("Couldn't get all coupons by price: " + price + ", for company: " + customer.getName());
		}
		return getAllAvailableCouponsByPrice;
	}

	/**
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/Customer/getAllPurchasedCoupons", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Collection<Coupon> getAllPurchasedCoupons(HttpServletRequest request) {
		CustomerFacade customerFacade = getFacade(request);
		Collection<Coupon> allPurchasedCoupons = null;
		try {
			allPurchasedCoupons = customerFacade.getAllPurchasedCoupons();
		} catch (CouponSystemExceptions e) {
			logger.error("Couldn't get all coupons for company: " + customer.getName());
		}
		return allPurchasedCoupons;
	}

	/**
	 * @param couponType
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/Customer/getAllPurchasedCouponsByType/{couponType}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Collection<Coupon> getAllPurchasedCouponsByType(@PathVariable("couponType") CouponType couponType,
			HttpServletRequest request) {
		CustomerFacade customerFacade = getFacade(request);
		Collection<Coupon> getAllPurchasedCouponsByType = null;
		try {
			getAllPurchasedCouponsByType = customerFacade.getAllPurchasedCouponsByType(couponType);
		} catch (CouponSystemExceptions e) {
			logger.error("Couldn't get all coupons type: " + couponType + ", for customer: " + customer.getName());
		}
		return getAllPurchasedCouponsByType;
	}

	/**
	 * @param price
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/Customer/getAllPurchasedCouponsByPrice/{price}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Collection<Coupon> getAllPurchasedCouponsByPrice(@PathVariable("price") double price,
			HttpServletRequest request) {
		CustomerFacade customerFacade = getFacade(request);
		Collection<Coupon> getAllPurchasedCouponsByPrice = null;
		// double price = 0;
		try {
			getAllPurchasedCouponsByPrice = customerFacade.getAllPurchasedCouponsByPrice(price);
		} catch (CouponSystemExceptions e) {
			logger.error("Couldn't get all coupons by price: " + price + ", for company: " + customer.getName());
		}
		return getAllPurchasedCouponsByPrice;
	}

	/**
	 * @param request
	 * @param response
	 */
	@RequestMapping(value = "/Customer/logout", method = RequestMethod.POST)
	public void logout(HttpServletRequest request, HttpServletResponse response) {
		HttpSession session = request.getSession(false);
		if (request.isRequestedSessionIdValid() && session != null) {
			session.invalidate();
		}
		handleLogOutResponse(request, response);
	}

	/**
	 * @param request
	 * @param response
	 */
	private void handleLogOutResponse(HttpServletRequest request, HttpServletResponse response) {
		Cookie[] cookies = request.getCookies();
		for (Cookie cookie : cookies) {
			cookie.setMaxAge(0);
			cookie.setValue(null);
			cookie.setPath("/");
			response.addCookie(cookie);
		}
	}
}
