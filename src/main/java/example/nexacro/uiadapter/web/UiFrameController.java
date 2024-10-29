package example.nexacro.uiadapter.web;

import com.nexacro.uiadapter.boot.core.NexacroException;
import com.nexacro.uiadapter.boot.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.boot.core.data.NexacroResult;
import example.nexacro.uiadapter.pojo.CmmBtn;
import example.nexacro.uiadapter.pojo.ComCode;
import example.nexacro.uiadapter.pojo.ComMenu;
import example.nexacro.uiadapter.service.UiFrameService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

/**
 * <pre>
 * @title   
 * @desc    아래의 예제는 샘플용으로 작성된 코드로 참고용으로만
 *          사용하시기 바랍니다.
 * -        Controller Sample Class
 * @package com.nexacro.sample.uiadapter.spring.web
 * <pre>
 * 
 * @author  TOBESOFT
 * @since   2024. 10. 18.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜				변경자		내용
 * ------------------------------------------------
 * 2024. 11. 20.	TOBESOFT	최초작성
 */
@Controller
public class UiFrameController {

	private Logger log = LoggerFactory.getLogger(UiFrameController.class);

	@Autowired(required=true)
    private UiFrameService uiFrameService;
    
	/**
	 * 
	 * <pre>
	 * @desc 메뉴 리스트 데이터 조회 - VO
	 * @param  
	 * @return NexacroResult
	 * @throws 
	 * </pre>
	 */
    @RequestMapping(value = "/selectMenuList.do")
	public NexacroResult selectMenuList() throws NexacroException{

		List<ComMenu> comMenu = uiFrameService.selectMenuList();
		NexacroResult result = new NexacroResult();
		result.addDataSet("MENULIST", comMenu);

		return result;
	}

	/**
	 * 메뉴 리스트 데이터 입력,수정,삭제
	 * @param modifyList
	 * @return
	 */
	@RequestMapping(value = "/saveMenuList.do")
	public NexacroResult saveMenuList(@ParamDataSet(name = "MENULIST") List<ComMenu> comMenus,
									  @ParamDataSet(name = "CMMBTNLIST") List<CmmBtn> cmmBtnLists) throws NexacroException{

		uiFrameService.saveMenuList(comMenus);
		uiFrameService.saveCmmBtnList(cmmBtnLists);

		NexacroResult result = new NexacroResult();

		return result;
	}


	/**
	 *
	 * <pre>
	 * @desc 메뉴 공통 버튼 리스트 데이터 조회 - VO
	 * @param
	 * @return NexacroResult
	 * @throws
	 * </pre>
	 */
	@RequestMapping(value = "/selectCmmBtnList.do")
	public NexacroResult selectCmmBtnList(@ParamDataSet(name = "dsMenuId", required = false) CmmBtn searchVo) throws NexacroException{

		List<CmmBtn> cmmBtn = uiFrameService.selectCmmBtnList(searchVo);
		NexacroResult result = new NexacroResult();
		result.addDataSet("CMMBTNLIST", cmmBtn);

		return result;
	}

	/**
	 *
	 * <pre>
	 * @desc 공통 코드 리스트 데이터 조회 - VO
	 * @param
	 * @return NexacroResult
	 * @throws
	 * </pre>
	 */
	@RequestMapping(value = "/selectComCodeList.do")
	public NexacroResult selectComCodeList(@ParamDataSet(name = "dsIn", required = false) ComCode searchVo) throws NexacroException{

		List<ComCode> codeList = uiFrameService.selectComCodeList(searchVo);
		NexacroResult result = new NexacroResult();
		result.addDataSet("COMCODELIST", codeList);

		return result;
	}

	/**
	 *
	 * <pre>
	 * @desc 공통 코드 상세 리스트 데이터 조회 - VO
	 * @param
	 * @return NexacroResult
	 * @throws
	 * </pre>
	 */
	@RequestMapping(value = "/selectComCodeDetailList.do")
	public NexacroResult selectComCodeDetailList(@ParamDataSet(name = "dsIn", required = false) ComCode searchVo) throws NexacroException{

		List<ComCode> codeList = uiFrameService.selectComCodeDetailList(searchVo);
		NexacroResult result = new NexacroResult();
		result.addDataSet("COMCODEDETAILLIST", codeList);

		return result;
	}

	/**
	 * @desc 공통코드 리스트, 공통코드 상세 데이터 입력,수정,삭제
	 * @param modifyList
	 * @return
	 */
	@RequestMapping(value = "/saveComCodeList.do")
	public NexacroResult saveComCodeList(@ParamDataSet(name = "COMCODELIST") List<ComCode> codeList,
									  @ParamDataSet(name = "COMCODEDETAILLIST") List<ComCode> codeDetailList) throws NexacroException{

		uiFrameService.saveComCodeList(codeList, codeDetailList);

		NexacroResult result = new NexacroResult();

		return result;
	}
}
