package jb9.coupon.sys.core.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import coupon.sys.core.exceptions.CouponSystemExceptions;
import coupon.sys.core.facade.ClientType;
import coupon.sys.core.facade.CouponClientFacade;
import coupon.sys.core.main.CouponSystem;

@Controller
public class LoginServlet  extends CouponSystem{
	
	

	public LoginServlet() {
		super();
	}

	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public  String doPostRedirect(
			// declare parameters sent by the user!
			/*
		<p> NAME : <input name="name" type="text"></p>
		<p> PASSWORD : <input name="password" type="password"></p>
		use must call the parameters like the text box name attribute
			 */
				@RequestParam String name, @RequestParam String password, @RequestParam ClientType clientType,
				HttpServletRequest request
			) throws CouponSystemExceptions
	{
		
		// check which usertype we got!
		//CouponSystem cs = (new CouponSystem).login( name, password, clientType);
		
		CouponClientFacade cf = (CouponClientFacade) login(name, password, clientType); // should be get instance
		
		if (cf == null) // login failed!
		{
			return "redirect:https://localhost:8443/login.html";
		}
		
		// success!
		request.getSession().setAttribute("facade", cf);
		
		// now redirect to the correct page!
		switch (clientType)
		{
			case ADMIN:
					return "redirect:https://localhost:8443/admin/index.html";
			case COMPANY:
					return "redirect:https://localhost:8443/company/index.html";
			case CUSTOMER:
					return "redirect:https://localhost:8443/customer/index.html";
		}
		
		return "redirect:https://localhost:8443/login.html";
	}
}
