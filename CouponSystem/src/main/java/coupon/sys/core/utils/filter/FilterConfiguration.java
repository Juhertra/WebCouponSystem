package coupon.sys.core.utils.filter;

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
		registrationBean.addUrlPatterns("/admin/*", "/company/*", "/customer/*");
		registrationBean.setOrder(2);
		return registrationBean;
	}
}
