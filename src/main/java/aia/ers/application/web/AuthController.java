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

  /**
   *
   * <pre>
   * @desc 권한그룹별메뉴조회 - VO
   * @param
   * @return NexacroResult
   * </pre>
   */
  @RequestMapping(value = "/selectAuthMenuList.do")
  public NexacroResult selectAuthMenuList(@ParamDataSet(name = "dsIn", required = false) Auth searchVo) throws NexacroException{

    List<Auth> authMenuList = authService.selectAuthMenuList(searchVo);
    NexacroResult result = new NexacroResult();
    result.addDataSet("AUTHMENULIST", authMenuList);

    return result;
  }

  /**
   * @desc 권한별프로그램관리 입력,삭제
   * @param
   * @return NexacroResult
   */
  @RequestMapping(value = "/saveAuthMenuList.do")
  public NexacroResult saveAuthMenuList(@ParamDataSet(name = "AUTHMENULIST") List<Auth> authMenuList) throws NexacroException{

    authService.saveAuthMenuList(authMenuList);

    NexacroResult result = new NexacroResult();

    return result;
  }

	/**
	 *
	 * <pre>
	 * @desc 권한별 사용자조회 - VO
	 * @param
	 * @return NexacroResult
	 * </pre>
	 */
	@RequestMapping(value = "/selectAuthUsrMngm.do")
	public NexacroResult selectAuthUsrMngm(@ParamDataSet(name = "dsIn", required = false) Auth searchVo) throws NexacroException{

		Auth authUsrMngm = authService.selectAuthUsrMngm(searchVo);
		NexacroResult result = new NexacroResult();
		result.addDataSet("AUTHUSRMNGM", authUsrMngm);

		return result;
	}

	/**
	 *
	 * <pre>
	 * @desc 권한별 사용자목록 조회 - VO
	 * @param
	 * @return NexacroResult
	 * </pre>
	 */
	@RequestMapping(value = "/selectAuthUsrMngmList.do")
	public NexacroResult selectAuthUsrMngmList(@ParamDataSet(name = "dsIn", required = false) Auth searchVo) throws NexacroException{

		List<Auth> authUsrMngmList = authService.selectAuthUsrMngmList(searchVo);
		NexacroResult result = new NexacroResult();
		result.addDataSet("AUTHUSRMNGMLIST", authUsrMngmList);

		return result;
	}

	/**
	 * @desc 권한별 사용자 입력,삭제
	 * @param
	 * @return NexacroResult
	 */
	@RequestMapping(value = "/saveAuthUsrMngmList.do")
	public NexacroResult saveAuthUsrMngmList(@ParamDataSet(name = "AUTHUSRMNGMLIST") List<Auth> authUsrMngmList) throws NexacroException{

		authService.saveAuthUsrMngmList(authUsrMngmList);

		NexacroResult result = new NexacroResult();

		return result;
	}

	/**
	 *
	 * <pre>
	 * @desc 사용자별(예외) 추가권한 조회 - VO
	 * @param
	 * @return NexacroResult
	 * </pre>
	 */
	@RequestMapping(value = "/selectUsrExcptAuthList.do")
	public NexacroResult selectUsrExcptAuthList(@ParamDataSet(name = "dsIn", required = false) Auth searchVo) throws NexacroException{

		List<Auth> usrExcptAuthList = authService.selectUsrExcptAuthList(searchVo);
		NexacroResult result = new NexacroResult();
		result.addDataSet("USREXCPTAUTHLIST", usrExcptAuthList);

		return result;
	}

	/**
	 *
	 * <pre>
	 * @desc 사용자별(예외) 추가권한 메뉴 조회 - VO
	 * @param
	 * @return NexacroResult
	 * </pre>
	 */
	@RequestMapping(value = "/selectUsrExcptAuthMenuList.do")
	public NexacroResult selectUsrExcptAuthMenuList(@ParamDataSet(name = "dsIn", required = false) Auth searchVo) throws NexacroException{

		List<Auth> usrExcptAuthMenuList = authService.selectUsrExcptAuthMenuList(searchVo);
		NexacroResult result = new NexacroResult();
		result.addDataSet("USREXCPTAUTHMENULIST", usrExcptAuthMenuList);

		return result;
	}

	/**
	 * @desc 사용자별(예외) 추가권한 입력,삭제
	 * @param
	 * @return NexacroResult
	 */
	@RequestMapping(value = "/saveUsrExcptAuthList.do")
	public NexacroResult saveUsrExcptAuthList(@ParamDataSet(name = "USREXCPTAUTHLIST") List<Auth> usrExcptAuthList,
																								@ParamDataSet(name = "USREXCPTAUTHMENULIST") List<Auth> usrExcptAuthMenuList) throws NexacroException{

		authService.saveUsrExcptAuthList(usrExcptAuthList, usrExcptAuthMenuList);

		NexacroResult result = new NexacroResult();

		return result;
	}
}
