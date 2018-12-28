package jb9.coupon.sys.core.controller;

//import java.util.logging.Logger;

import javax.servlet.http.HttpServletRequest;

//import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import coupon.sys.core.exceptions.CouponSystemExceptions;
import coupon.sys.core.facade.ClientType;
import coupon.sys.core.facade.CouponClientFacade;
import coupon.sys.core.main.CouponSystem;

@Controller
public class LoginServlet extends CouponSystem {

	//private static final Logger LOGGER = (Logger) LoggerFactory.getLogger(LoginServlet.class);
	
	public LoginServlet() {
		super();
	}

	/**
	 * @param name
	 * @param password
	 * @param clientType
	 * @param request
	 * 
	 * @return
	 * @throws CouponSystemExceptions
	 */
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public String doPostRedirect(@RequestParam String name, @RequestParam String password,
			@RequestParam ClientType clientType, HttpServletRequest request) throws CouponSystemExceptions {

		// check which usertype we got!

		CouponClientFacade cf = (CouponClientFacade) login(name, password, clientType); // should be get instance

		if (cf == null) // login failed!
		{
			return "redirect:https://localhost:8443/login.html";
		}

		// success!
		request.getSession().setAttribute("facade", cf);

		// now redirect to the correct page!
		switch (clientType) {
		case ADMIN:
			return "redirect:https://localhost:8443/Admin/index.html";
		case COMPANY:
			return "redirect:https://localhost:8443/Company/index.html";
		case CUSTOMER:
			return "redirect:https://localhost:8443/Customer/index.html";
		}

		return "redirect:https://localhost:8443/login.html";
	}
}
