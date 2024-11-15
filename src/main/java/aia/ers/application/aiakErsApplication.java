package aia.ers.application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
// 일반 실행 형식
public class aiakErsApplication extends SpringBootServletInitializer {

	protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
		return builder.sources(aiakErsApplication.class);
	}

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
		SpringApplication.run(aiakErsApplication.class, args);
	}
}