package aia.ers.application.web;

import aia.ers.application.pojo.Auth;
import aia.ers.application.service.AuthService;
import com.nexacro.uiadapter.boot.core.NexacroException;
import com.nexacro.uiadapter.boot.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.boot.core.data.NexacroResult;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

/**
 * <pre>
 * @title   권한
 * @desc
 * @package com.nexacro.sample.uiadapter.spring.web
 * <pre>
 * 
 * @author  강성호
 * @since   2024. 11. 06.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜						변경자		내용
 * ------------------------------------------------
 * 2024. 11. 06.	강성호		최초작성
 */
@Controller
public class AuthController {

	private Logger log = LoggerFactory.getLogger(AuthController.class);

	@Autowired(required=true)
    private AuthService authService;
    
	/**
	 * 
	 * <pre>
	 * @desc 권한코드 리스트 데이터 조회 - VO
	 * @param  
	 * @return NexacroResult
	 * </pre>
	 */
    @RequestMapping(value = "/selectAuthCodeList.do")
	public NexacroResult selectAuthCodeList(@ParamDataSet(name = "dsIn", required = false) Auth searchVo) throws NexacroException{

		List<Auth> authCodeList = authService.selectAuthCodeList(searchVo);
		NexacroResult result = new NexacroResult();
		result.addDataSet("AUTHCODELIST", authCodeList);

		return result;
	}

	/**
	 * @desc 권한코드 리스트 데이터 입력,수정,삭제
	 * @param
	 * @return NexacroResult
	 */
	@RequestMapping(value = "/saveAuthCodeList.do")
	public NexacroResult saveAuthCodeList(@ParamDataSet(name = "AUTHCODELIST") List<Auth> authCodeList) throws NexacroException{

		authService.saveAuthCodeList(authCodeList);

		NexacroResult result = new NexacroResult();

		return result;
	}
}
