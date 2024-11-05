package aia.ers.application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
// 일반 실행 형식
public class UiadapterApplication {

// War 파일로 배포형식
//public class UiadapterApplication extends SpringBootServletInitializer{

	/**
	 * War 파일로 배포일때 추가
	 * @param builder
	 * @return
	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
		return builder.sources(UiadapterApplication.class);
	}
	 */

	public static void main(String[] args) {
		SpringApplication.run(UiadapterApplication.class, args);
	}
}