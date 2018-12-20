package jb9.coupon.sys.core.filter;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FilterConfiguration {

	@Bean
	public FilterRegistrationBean<CustomURLFilter> filtreFilterRegistrationBean(){
		FilterRegistrationBean<CustomURLFilter> registrationBean = new FilterRegistrationBean<>();
		CustomURLFilter customURLFilter = new CustomURLFilter();
		
		registrationBean.setFilter(customURLFilter);
		registrationBean.addUrlPatterns("/Admin/*", "/Company/*", "/Customer/*");
		registrationBean.setOrder(2);
		return registrationBean;
	}
}
