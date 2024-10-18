package example.nexacro.uiadapter.web;

import com.nexacro.uiadapter.boot.core.NexacroException;
import com.nexacro.uiadapter.boot.core.data.NexacroResult;
import example.nexacro.uiadapter.pojo.MenuList;
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
 * @since   2017. 11. 20.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2017. 11. 20.		TOBESOFT	최초작성
 */
@Controller
public class UiFrameController {

	private Logger log = LoggerFactory.getLogger(UiFrameController.class);

	@Autowired(required=true)
    private UiFrameService uiFrameService;
    
	/**
	 * 
	 * <pre>
	 * @desc 리스트 데이터 조회 - VO
	 * @param  
	 * @return NexacroResult
	 * @throws 
	 * </pre>
	 */
    @RequestMapping(value = "/selectMenuList.do")
	public NexacroResult selectMenuList() throws NexacroException{

		List<MenuList> menuList = uiFrameService.selectMenuList();
		NexacroResult result = new NexacroResult();
		result.addDataSet("MENULIST", menuList);

		return result;
	}
}
